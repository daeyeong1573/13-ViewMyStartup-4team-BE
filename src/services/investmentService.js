import prisma from "../lib/prisma.js";
import { NotFoundError, ValidationError } from "../utils/errors.js";

export async function updateInvestment(id, { amount, comment, password }) {
  const investment = await prisma.virtualInvestment.findUnique({
    where: { id },
  });

  if (!investment) {
    throw new NotFoundError("해당 투자를 찾을 수 없습니다.");
  }

  if (investment.password !== password) {
    throw new ValidationError("비밀번호가 일치하지 않습니다.");
  }

  const updatedData = await prisma.virtualInvestment.update({
    where: { id },
    data: {
      ...(amount !== undefined && { amount }),
      ...(comment !== undefined && { comment }),
    },
    select: {
      id: true,
      investorName: true,
      amount: true,
      comment: true,
      updatedAt: true,
    },
  });

  return {
    id: updatedData.id,
    investorName: updatedData.investorName,
    amount: updatedData.amount.toString(),
    comment: updatedData.comment,
    updatedAt: updatedData.updatedAt,
  };
}

export async function removeInvestment(id, { password }) {
  const investment = await prisma.virtualInvestment.findUnique({
    where: { id },
  });

  if (!investment) {
    throw new NotFoundError("해당 투자를 찾을 수 없습니다.");
  }

  if (investment.password !== password) {
    throw new ValidationError("비밀번호가 일치하지 않습니다.");
  }

  await prisma.virtualInvestment.delete({
    where: { id },
  });

  return;
}

// investmentStatusService 부분
export async function getInvestmentStatusList({ page, limit, orderBy }) {
  const skip = (page - 1) * limit;

  // DB 조회
  const startups = await prisma.startup.findMany({
    include: {
      virtualInvestments: true,
    },
  });

  // 데이터 가공 및 형변환
  const formattedData = startups.map((startup) => {
    // 투자 내역(virtualInvestments) 목록
    const formattedVirtualInvestments = startup.virtualInvestments.map(
      (inv) => ({
        ...inv,
        amount: Number(inv.amount),
      }),
    );

    // 가상 투자 금액 합산
    const virtualInvestmentTotalBigInt = startup.virtualInvestments.reduce(
      (sum, inv) => {
        return sum + inv.amount;
      },
      0n,
    );

    return {
      ...startup,
      virtualInvestmentTotal: Number(virtualInvestmentTotalBigInt),
      totalInvestment: Number(startup.totalInvestment),
      revenue: Number(startup.revenue),
      virtualInvestments: formattedVirtualInvestments,
    };
  });

  //  2차 정렬: 금액이 같으면 기업명 가나다순
  const investmentSortStrategies = {
    virtualInvestment_desc: (a, b) => {
      // 금액이 다르면 기존처럼 금액순으로 정렬
      if (b.virtualInvestmentTotal !== a.virtualInvestmentTotal) {
        return b.virtualInvestmentTotal - a.virtualInvestmentTotal;
      }
      // 금액이 완전히 같으면 기업 이름(name) 가나다순으로 정렬
      return a.name.localeCompare(b.name);
    },
    virtualInvestment_asc: (a, b) => {
      if (a.virtualInvestmentTotal !== b.virtualInvestmentTotal) {
        return a.virtualInvestmentTotal - b.virtualInvestmentTotal;
      }
      return a.name.localeCompare(b.name);
    },
    totalInvestment_desc: (a, b) => {
      if (b.totalInvestment !== a.totalInvestment) {
        return b.totalInvestment - a.totalInvestment;
      }
      return a.name.localeCompare(b.name);
    },
    totalInvestment_asc: (a, b) => {
      if (a.totalInvestment !== b.totalInvestment) {
        return a.totalInvestment - b.totalInvestment;
      }
      return a.name.localeCompare(b.name);
    },
  };

  const currentSortFn = investmentSortStrategies[orderBy];

  if (currentSortFn) {
    formattedData.sort(currentSortFn);
  }

  // 페이지네이션
  const totalCount = formattedData.length;
  const paginatedStartups = formattedData.slice(skip, skip + limit);

  return {
    data: paginatedStartups,
    pagination: {
      page,
      limit,
      total: totalCount,
      totalPages: Math.ceil(totalCount / limit),
    },
  };
}
