import prisma from "../lib/prisma.js";
import { serializeStartup } from "../utils/serialize.js";

export async function saveCompareSelection({ myStartupId, compareStartupIds }) {
  const data = compareStartupIds.map((compareStartupId) => ({
    myStartupId,
    compareStartupId,
  }));

  await prisma.$transaction([
    // 1. CompareSelection 저장
    prisma.selectionLog.createMany({ data }),

    // 2. myStartup count +1
    prisma.startup.update({
      where: { id: myStartupId },
      data: { myStartupCount: { increment: 1 } },
    }),

    // 3. compareStartup count 각각 +1
    prisma.startup.updateMany({
      where: { id: { in: compareStartupIds } },
      data: { compareStartupCount: { increment: 1 } },
    }),
  ]);
}

// 비교 결과
export async function getCompareResult({
  myStartupId,
  compareStartupIds,
  orderBy,
}) {
  const targetIds = [myStartupId, ...compareStartupIds];

  const startups = await prisma.startup.findMany({
    where: { id: { in: targetIds } },
    orderBy: [orderBy, { id: "asc" }],
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
  });

  const myStartup = serializeStartup(
    startups.find((s) => s.id === myStartupId),
  );

  const compareStartups = startups.map(serializeStartup);

  return { myStartup, compareStartups };
}

// 기업 순위
export async function getCompareRank({ myStartupId, orderBy }) {
  const allStartups = await prisma.startup.findMany({
    orderBy: [orderBy, { id: "asc" }],
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
  });

  const myRankIndex = allStartups.findIndex((s) => s.id === myStartupId);
  const myRank = myRankIndex + 1;

  const start = Math.max(0, myRankIndex - 2);
  const end = Math.min(allStartups.length, myRankIndex + 3);

  const nearbyStartups = allStartups.slice(start, end).map((s, i) => ({
    rank: start + i + 1,
    isMyStartup: s.id === myStartupId,
    ...serializeStartup(s),
  }));

  return { myRank, nearbyStartups };
}
