import { asyncHandler } from "../utils/asyncHandler.js";
import { getRecentMyStartups } from "../service/startupService.js";

export const listRecentMyStartups = asyncHandler(async (req, res) => {
  const { search, limit } = req.validatedData;
  const data = await getRecentMyStartups({ search, limit });
  res.status(200).json({ data });
});
