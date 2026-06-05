import { asyncHandler } from "../utils/asyncHandler.js";
import {
  removeInvestment,
  updateInvestment,
  getInvestmentStatusList,
  createInvestment,
} from "../services/investmentService.js";

export const postInvestment = asyncHandler(async (req, res) => {
  const { startupId, investorName, amount, comment, password } =
    req.validatedData;
  const result = await createInvestment({
    startupId,
    investorName,
    amount,
    comment,
    password,
  });
  res.status(201).json(result);
});

export const patchInvestment = asyncHandler(async (req, res) => {
  const { id, investorName, amount, comment, password } = req.validatedData;
  const result = await updateInvestment(id, {
    investorName,
    amount,
    comment,
    password,
  });
  res.status(200).json(result);
});

export const deleteInvestment = asyncHandler(async (req, res) => {
  const { id, password } = req.validatedData;
  await removeInvestment(id, { password });
  res.status(200).json({ message: "해당 투자가 삭제되었습니다." });
});

// 투자 현황 리스트 조회 컨트롤러
export const getInvestmentStatus = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const orderBy = req.query.orderBy || "virtualInvestment_desc";

  const result = await getInvestmentStatusList({
    page,
    limit,
    orderBy,
  });

  res.status(200).json(result);
});
