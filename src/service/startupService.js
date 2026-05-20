import prisma from "../lib/prisma.js";

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
