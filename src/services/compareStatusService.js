import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCompareStatusData = async ({ page, limit, orderBy }) => {
  const currentPage = parseInt(page, 10);
  const perPage = parseInt(limit, 10);
  const offset = (currentPage - 1) * perPage;

  let orderByCondition = { myStartupCount: "desc" };

  if (orderBy === "myStartupCount_asc") {
    orderByCondition = { myStartupCount: "asc" };
  } else if (orderBy === "investmentAmount_desc") {
    orderByCondition = { totalInvestment: "desc" };
  } else if (orderBy === "investmentAmount_asc") {
    orderByCondition = { totalInvestment: "asc" };
  }

  const [total, dataResult] = await prisma.$transaction([
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
};
