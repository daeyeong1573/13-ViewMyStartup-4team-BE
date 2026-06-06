import prisma from "../lib/prisma.js";
import { NotFoundError } from "../utils/errors.js";
// 👇 새로 추가된 부분: 프론트엔드의 문자열을 Prisma 쿼리 객체로 변환하는 매핑 테이블
const StartupSort = {
  totalInvestment_desc: { totalInvestment: "desc" },
  totalInvestment_asc: { totalInvestment: "asc" },
  revenue_desc: { revenue: "desc" },
  revenue_asc: { revenue: "asc" },
  employeeCount_desc: { employeeCount: "desc" },
  employeeCount_asc: { employeeCount: "asc" },
};

export async function getStartups({
  search,
  page,
  limit,
  myStartupId,
  orderBy,
}) {
  const skip = (page - 1) * limit;

  const where = {
    ...(search && { name: { contains: search, mode: "insensitive" } }),
    ...(myStartupId && { id: { not: myStartupId } }),
  };
  // 👇 새로 추가된 부분: 매핑된 정렬 기준 가져오기 (기본값은 최신순)
  const prismaOrderBy = StartupSort[orderBy] || {
    createdAt: "desc",
  };

  const [total, startups] = await Promise.all([
    prisma.startup.count({ where }),
    prisma.startup.findMany({
      where,
      skip: skip,
      take: limit,
      orderBy: [prismaOrderBy, { name: "asc" }],
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

  const [startup, totalInvestmentCount, aggregateResult] = await Promise.all([
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
    prisma.virtualInvestment.aggregate({
      where: { startupId: id },
      _sum: {
        amount: true,
      },
    }),
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
  const formattedInvestments = investments.map((investment, index) => ({
    id: investment.id,
    investorName: investment.investorName,
    amount: investment.amount.toString(),
    comment: investment.comment,
    createdAt: investment.createdAt,
    rank: skip + index + 1,
  }));

  //합계가 없을 경우
  const virtualInvestmentTotal = aggregateResult._sum.amount || 0n;

  return {
    ...startup,
    totalInvestment: startup.totalInvestment.toString(),
    revenue: startup.revenue.toString(),
    virtualInvestmentTotal: virtualInvestmentTotal.toString(),
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
