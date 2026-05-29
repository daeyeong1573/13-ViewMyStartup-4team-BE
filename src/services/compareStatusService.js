import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCompareStatusData = async ({ page, limit, orderBy }) => {
  try {
    const currentPage = parseInt(page, 10) || 1;
    const perPage = parseInt(limit, 10) || 10;
    const offset = (currentPage - 1) * perPage;

    let orderByCondition = { myStartupCount: "desc" };

    if (orderBy === "myStartupCount_asc") {
      orderByCondition = { myStartupCount: "asc" };
    } else if (orderBy === "compareStartupCount_desc") {
      orderByCondition = { compareStartupCount: "desc" };
    } else if (orderBy === "compareStartupCount_asc") {
      orderByCondition = { compareStartupCount: "asc" };
    }

    const [total, dataResult] = await prisma.$transaction([
      prisma.startup.count(),
      prisma.startup.findMany({
        skip: offset,
        take: perPage,
        orderBy: orderByCondition,
      }),
    ]);

    const sanitizedData = dataResult.map((startup) => ({
      ...startup,
      myStartupCount: parseInt(
        (startup.myStartupCount || startup.my_startup_count || 0).toString(),
        10,
      ),
      totalInvestment: parseInt(
        (
          startup.totalInvestment ||
          startup.compareStartupCount ||
          0
        ).toString(),
        10,
      ),
      compareStartupCount: parseInt(
        (
          startup.compareStartupCount ||
          startup.compare_startup_count ||
          0
        ).toString(),
        10,
      ),
    }));

    const totalPages = Math.ceil(total / perPage);

    return {
      data: sanitizedData,
      pagination: {
        page: currentPage,
        limit: perPage,
        total,
        totalPages,
      },
    };
  } catch (error) {
    console.error("DB 조회 중 에러 발생:", error);
    throw error;
  }
};
