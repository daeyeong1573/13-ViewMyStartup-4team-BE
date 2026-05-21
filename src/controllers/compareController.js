import { saveCompareSelection } from "../service/compareService.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createCompareSelection = asyncHandler(async (req, res) => {
  const { myStartupId, compareStartupIds } = req.validatedData;
  await saveCompareSelection({ myStartupId, compareStartupIds });
  res.status(201).json({ message: "비교 선택이 저장되었습니다." });
});
