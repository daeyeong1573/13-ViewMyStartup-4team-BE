import prisma from "../lib/prisma.js";

export const getCompareStatusData = async ({ page, limit, orderBy }) => {
  try {
    const skip = (page - 1) * limit;

    const [total, dataResult] = await prisma.$transaction([
      prisma.startup.count(),
      prisma.startup.findMany({
        skip: skip,
        take: limit,
        orderBy: orderBy,
      }),
    ]);

    const sanitizedData = dataResult.map((startup) => ({
      id: startup.id,
      name: startup.name,
      description: startup.description,
      category: startup.category,
      myStartupCount: Number(startup.myStartupCount || 0),
      compareStartupCount: Number(startup.compareStartupCount || 0),
      imgUrl: startup.imgUrl,
    }));

    return {
      data: sanitizedData,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("DB 조회 중 에러 발생:", error);
    throw error;
  }
};
