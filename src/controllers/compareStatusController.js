import { getCompareStatusData } from "../services/compareStatusService.js";

export const handleGetCompareStatus = async (req, res) => {
  const { page, limit, orderBy } = req.validatedData;
  const result = await getCompareStatusData({ page, limit, orderBy });
  return res.status(200).json(result);
};
