import { asyncHandler } from "../utils/asyncHandler.js";
import { getStartups } from "../service/startupService.js";

export const listStartups = asyncHandler(async (req, res) => {
  const { search, page, limit } = req.validatedData;
  const result = await getStartups({ search, page, limit });
  res.status(200).json(result);
});
