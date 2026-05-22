import prisma from "../lib/prisma.js";
import { NotFoundError } from "../utils/errors.js";

export async function getStartups({ search, page, limit }) {
  const skip = (page - 1) * limit;

  const where = search
    ? { name: { contains: search, mode: "insensitive" } }
    : {};

  const [total, startups] = await Promise.all([
    prisma.startup.count({ where }),
    prisma.startup.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        category: true,
        description: true,
        imgUrl: true,
        totalInvestment: true,
        revenue: true,
        employeeCount: true,
      },
    }),
  ]);

  const data = startups.map((s) => ({
    ...s,
    totalInvestment: s.totalInvestment.toString(),
    revenue: s.revenue.toString(),
  }));

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getStartupDetailWithInvestments({ id, page, limit }) {
  const skip = (page - 1) * limit;

  const [startup, totalInvestmentCount] = await Promise.all([
    prisma.startup.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        category: true,
        description: true,
        imgUrl: true,
        totalInvestment: true,
        revenue: true,
        employeeCount: true,
      },
    }),
    prisma.virtualInvestment.count({ where: { startupId: id } }),
  ]);

  if (!startup) {
    throw new NotFoundError("해당 기업을 찾을 수 없습니다.");
  }

  const investments = await prisma.virtualInvestment.findMany({
    where: { startupId: id },
    select: {
      id: true,
      investorName: true,
      amount: true,
      comment: true,
      createdAt: true,
    },
    orderBy: [
      //금액순, 생성순, 투자자 가나다순 정렬
      { amount: "desc" },
      { createdAt: "desc" },
      { investorName: "asc" },
    ],
    skip,
    take: limit,
  });

  //순위 매기기
  const formattedInvestments = investments.map((i, index) => ({
    id: i.id,
    investorName: i.investorName,
    amount: i.amount.toString(),
    comment: i.comment,
    rank: skip + index + 1,
  }));

  return {
    ...startup,
    totalInvestment: startup.totalInvestment.toString(),
    revenue: startup.revenue.toString(),
    investmentList: {
      data: formattedInvestments,
      pagination: {
        page,
        limit,
        total: totalInvestmentCount,
        totalPages: Math.ceil(totalInvestmentCount / limit),
      },
    },
  };
}
