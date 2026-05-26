import { asyncHandler } from "../utils/asyncHandler.js";
import {
  removeInvestment,
  updateInvestment,
} from "../services/investmentService.js";

export const patchInvestment = asyncHandler(async (req, res) => {
  const { id, amount, comment, password } = req.validatedData;
  const result = await updateInvestment(id, { amount, comment, password });
  res.status(200).json(result);
});

export const deleteInvestment = asyncHandler(async (req, res) => {
  const { id, password } = req.validatedData;
  await removeInvestment(id, { password });
  res.status(200).json({ message: "해당 투자가 삭제되었습니다." });
});
