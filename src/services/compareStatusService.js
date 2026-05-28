// src/service/compareStatusService.js 최종 완결본
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCompareStatusData = async ({ page, limit, orderBy }) => {
  try {
    const currentPage = parseInt(page, 10) || 1;
    const perPage = parseInt(limit, 10) || 10;
    const offset = (currentPage - 1) * perPage;

    // 프론트엔드가 쏘아보낸 orderBy 문자열을 Prisma 컬럼과 1:1 완벽하게 분기 매핑
    let orderByCondition = { myStartupCount: "desc" }; // 기본값

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

    // 💥 [0으로 뭉개지는 현상과 정렬 마비 완벽 박멸 구역]
    // BigInt 객체나 숫자가 가공되는 시점의 누락을 막기위해, toString()을 거친 뒤
    // parseInt(..., 10) 기법으로 강제 원시 정수로 치환하여 프론트엔드가 곧바로 연산할 수 있게 합니다.
    const sanitizedData = dataResult.map((startup) => ({
      ...startup,
      myStartupCount: parseInt(
        (startup.myStartupCount || startup.my_startup_count || 0).toString(),
        10,
      ),
      totalInvestment: parseInt(
        (startup.totalInvestment || startup.total_investment || 0).toString(),
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
      data: sanitizedData, // ◀ 유실 없는 정수형 원본 데이터 세트 전달
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
