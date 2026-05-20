import prisma from "../lib/prisma.js";

export async function getRecentMyStartups({ search, limit }) {
  const grouped = await prisma.compareSelection.groupBy({
    by: ["myStartupId"],
    _max: { selectedAt: true },
    orderBy: { _max: { selectedAt: "desc" } },
    ...(!search && { take: limit }),
  });

  if (grouped.length === 0) return [];

  const myStartupIds = grouped.map((g) => g.myStartupId);

  const startups = await prisma.startup.findMany({
    where: {
      id: { in: myStartupIds },
      ...(search && { name: { contains: search, mode: "insensitive" } }),
    },
    select: {
      id: true,
      name: true,
      imgUrl: true,
      totalInvestment: true,
      category: { select: { name: true } },
    },
  });

  const selectedAtMap = new Map(
    grouped.map((g) => [g.myStartupId, g._max.selectedAt]),
  );

  return startups
    .sort(
      (a, b) =>
        new Date(selectedAtMap.get(b.id)) - new Date(selectedAtMap.get(a.id)),
    )
    .slice(0, limit)
    .map((s) => ({
      id: s.id,
      name: s.name,
      imgUrl: s.imgUrl,
      totalInvestment: s.totalInvestment.toString(),
      categoryName: s.category.name,
      lastSelectedAt: selectedAtMap.get(s.id),
    }));
}
