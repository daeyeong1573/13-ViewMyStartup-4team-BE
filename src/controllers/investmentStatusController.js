import { getInvestmentStatusList } from "../services/investmentStatusService.js";

// [GET] 투자 현황 리스트 조회 컨트롤러
export const getInvestmentStatus = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const orderBy = req.query.orderBy || "virtualInvestment_desc";

    const result = await getInvestmentStatusList({
      page,
      limit,
      orderBy,
    });

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
};
