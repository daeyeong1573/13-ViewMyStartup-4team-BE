import { z } from "zod";

const COMPARE_STARTUP = {
  MIN: 1,
  MAX: 5,
  PAGE: 1,
  LIMIT: 10,
};

const SORT_FIELDS = {
  totalInvestment_desc: { totalInvestment: "desc" },
  totalInvestment_asc: { totalInvestment: "asc" },
  revenue_desc: { revenue: "desc" },
  revenue_asc: { revenue: "asc" },
  employeeCount_desc: { employeeCount: "desc" },
  employeeCount_asc: { employeeCount: "asc" },

  myStartupCount_desc: { myStartupCount: "desc" },
  myStartupCount_asc: { myStartupCount: "asc" },
  compareStartupCount_desc: { compareStartupCount: "desc" },
  compareStartupCount_asc: { compareStartupCount: "asc" },
};

const compareSelectionSchema = z.object({
  myStartupId: z.string().uuid(),
  compareStartupIds: z
    .array(z.string().uuid())
    .min(COMPARE_STARTUP.MIN, "비교 기업은 최소 1개 이상이어야 합니다")
    .max(COMPARE_STARTUP.MAX, "비교 기업은 최대 5개까지 선택 가능합니다"),
});

const compareResultQuerySchema = z.object({
  myStartupId: z.string().uuid(),
  compareStartupIds: z.string().transform((val) =>
    val
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean),
  ),
  orderBy: z
    .string()
    .optional()
    .transform((val) => SORT_FIELDS[val] ?? { totalInvestment: "desc" }),
});

const compareStatusQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .default(String(COMPARE_STARTUP.PAGE))
    .transform(Number),
  limit: z
    .string()
    .optional()
    .default(String(COMPARE_STARTUP.LIMIT))
    .transform(Number),
  orderBy: z
    .string()
    .optional()
    .transform((val) => SORT_FIELDS[val] ?? SORT_FIELDS.myStartupCount_desc),
});

const compareSchema = {
  compareSelectionSchema,
  compareResultQuerySchema,
  compareStatusQuerySchema,
};

export default compareSchema;
