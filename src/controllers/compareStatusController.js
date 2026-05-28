import { getCompareStatusData } from "../services/compareStatusService.js";

export const handleGetCompareStatus = async (req, res) => {
  try {
    const { page = 1, limit = 10, orderBy = "myStartupCount_desc" } = req.query;
    const result = await getCompareStatusData({ page, limit, orderBy });

    console.log("🚨 [백엔드 가공 완료 직후 데이터] 🚨");
    console.log(
      "첫번째 데이터의 실제 필드 모양새:",
      result.data && result.data[0],
    );

    return res.status(200).json(result);
  } catch (error) {
    console.error("비교 현황 조회 API 오류:", error);
    return res.status(500).json({ error: "서버 내부 오류" });
  }
};
