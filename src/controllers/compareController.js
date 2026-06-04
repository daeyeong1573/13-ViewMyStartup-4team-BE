import {
  getCompareRank,
  getCompareResult,
  saveCompareSelection,
} from "../services/compareService.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createCompareSelection = asyncHandler(async (req, res) => {
  const { myStartupId, compareStartupIds } = req.validatedData;
  await saveCompareSelection({ myStartupId, compareStartupIds });
  res.status(201).json({ message: "비교 선택이 저장되었습니다." });
});

export const getCompareResultController = asyncHandler(async (req, res) => {
  const { myStartupId, compareStartupIds, orderBy } = req.validatedData;
  const result = await getCompareResult({
    myStartupId,
    compareStartupIds,
    orderBy,
  });
  res.status(200).json(result);
});

export const getCompareRankController = asyncHandler(async (req, res) => {
  const { myStartupId, orderBy } = req.validatedData;
  const result = await getCompareRank({ myStartupId, orderBy });
  res.status(200).json(result);
});

const compareController = {
  createCompareSelection,
  getCompareResultController,
  getCompareRankController,
};

export default compareController;
