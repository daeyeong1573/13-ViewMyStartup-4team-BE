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

//비교 결과
export async function getCompareResult({
  myStartupId,
  compareStartupIds,
  orderBy,
}) {
  const targetIds = [myStartupId, ...compareStartupIds];

  // 1. 비교 대상 스타트업 조회
  const startups = await prisma.startup.findMany({
    where: { id: { in: targetIds } },
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
  const compareStartups = compareStartupIds
    .map((id) => startups.find((s) => s.id === id))
    .filter(Boolean)
    .map(serializeStartup);

  // 2. 전체 순위 계산 (orderBy 기준)
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

  // 3. 위2 아래2 (내 기업 포함 최대 5개)
  const start = Math.max(0, myRankIndex - 2);
  const end = Math.min(allStartups.length, myRankIndex + 3);

  const nearbyStartups = allStartups.slice(start, end).map((s, i) => ({
    rank: start + i + 1,
    ...serializeStartup(s),
    isMyStartup: s.id === myStartupId,
  }));

  return {
    myStartup,
    compareStartups,
    rank: {
      myRank,
      nearbyStartups,
    },
  };
}
