import { asyncHandler } from "../utils/asyncHandler.js";
import {
  getStartupDetailWithInvestments,
  getStartups,
} from "../services/startupService.js";

export const listStartups = asyncHandler(async (req, res) => {
  const { search, page, limit } = req.validatedData;
  const result = await getStartups({ search, page, limit });
  res.status(200).json(result);
});

export const listStartupInvestments = asyncHandler(async (req, res) => {
  const { id, page, limit } = req.validatedData;

  const result = await getStartupDetailWithInvestments({ id, page, limit });
  res.status(200).json(result);
});
