import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCompareStatusData = async ({ page, limit, orderBy }) => {
  try {
    const currentPage = parseInt(page, 10) || 1;
    const perPage = parseInt(limit, 10) || 10;
    const offset = (currentPage - 1) * perPage;

    let orderByCondition = { myStartupCount: "desc" };

    if (orderBy === "myStartupCount_asc") {
      orderByCondition = { myStartupCount: "asc" }; // 선택 횟수 낮은순
    } else if (orderBy === "investmentAmount_desc") {
      orderByCondition = { totalInvestment: "desc" }; // 투자 금액 높은순
    } else if (orderBy === "investmentAmount_asc") {
      orderByCondition = { totalInvestment: "asc" }; // 투자 금액 낮은순
    }

    const [total, dataResult] = (await prisma.startup.$transaction)
      ? await prisma.$transaction([
          prisma.startup.count(),
          prisma.startup.findMany({
            skip: offset,
            take: perPage,
            orderBy: orderByCondition,
          }),
        ])
      : await prisma.$transaction([
          prisma.startup.count(),
          prisma.startup.findMany({
            skip: offset,
            take: perPage,
            orderBy: orderByCondition,
          }),
        ]);

    const totalPages = Math.ceil(total / perPage);

    return {
      data: dataResult,
      pagination: {
        page: currentPage,
        limit: perPage,
        total,
        totalPages,
      },
    };
  } catch (error) {
    console.error("❌ Prisma DB 조회 중 에러 발생:", error);
    throw error;
  }
};
