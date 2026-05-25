import prisma from "../lib/prisma.js";

// [GET] 투자 현황판 조회 서비스
export async function getInvestmentStatusList({ page, limit, orderBy }) {
  const skip = (page - 1) * limit;

  // 1. DB 조회
  let startups = await prisma.startup.findMany({
    include: {
      virtualInvestments: true,
    },
  });

  // 2. 데이터 가공 및 BigInt -> Number 변환
  startups = startups.map((startup) => {
    const virtualInvestmentTotal = startup.virtualInvestments.reduce(
      (sum, investment) => sum + Number(investment.amount || 0),
      0,
    );

    const formattedVirtualInvestments = startup.virtualInvestments.map(
      (inv) => ({
        ...inv,
        id: Number(inv.id),
        amount: Number(inv.amount),
      }),
    );

    return {
      ...startup,
      id: Number(startup.id),
      totalInvestment: Number(startup.totalInvestment),
      revenue: Number(startup.revenue),
      virtualInvestmentTotal: Number(virtualInvestmentTotal),
      virtualInvestments: formattedVirtualInvestments,
    };
  });

  // 3. 동적 정렬 로직
  if (orderBy === "virtualInvestment_desc") {
    startups.sort(
      (a, b) => b.virtualInvestmentTotal - a.virtualInvestmentTotal,
    );
  } else if (orderBy === "virtualInvestment_asc") {
    startups.sort(
      (a, b) => a.virtualInvestmentTotal - b.virtualInvestmentTotal,
    );
  } else if (orderBy === "totalInvestment_desc") {
    startups.sort((a, b) => b.totalInvestment - a.totalInvestment);
  } else if (orderBy === "totalInvestment_asc") {
    startups.sort((a, b) => a.totalInvestment - b.totalInvestment);
  }

  // 4. 페이지네이션 데이터 분할
  const totalCount = startups.length;
  const paginatedStartups = startups.slice(skip, skip + limit);

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
