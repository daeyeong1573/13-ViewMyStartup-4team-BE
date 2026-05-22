import { asyncHandler } from "../utils/asyncHandler.js";
import { updateInvestment } from "../services/investmentService.js";

export const patchInvestment = asyncHandler(async (req, res) => {
  const { id, amount, comment, password } = req.validatedData;
  const result = await updateInvestment(id, { amount, comment, password });
  res.status(200).json(result);
});
