import prisma from "../lib/prisma.js";

// [GET] 투자 현황판 조회
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

  // 동적 정렬
  const investmentSortStrategies = {
    virtualInvestment_desc: (a, b) =>
      b.virtualInvestmentTotal - a.virtualInvestmentTotal,
    virtualInvestment_asc: (a, b) =>
      a.virtualInvestmentTotal - b.virtualInvestmentTotal,
    totalInvestment_desc: (a, b) => b.totalInvestment - a.totalInvestment,
    totalInvestment_asc: (a, b) => a.totalInvestment - b.totalInvestment,
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
