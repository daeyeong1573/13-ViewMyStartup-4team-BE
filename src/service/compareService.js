import prisma from "../lib/prisma.js";

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
