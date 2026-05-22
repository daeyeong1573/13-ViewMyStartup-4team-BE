import { z } from "zod";

const STARTUP_PAGINATION = {
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

const STARTUP_INVESTMENT_PAGINATION = {
  DEFAULT_LIMIT: 5,
  MAX_LIMIT: 100,
};

export const startupListQuerySchema = z.object({
  search: z.string().trim().optional(),

  page: z.coerce.number().int().min(1).default(1),

  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(STARTUP_PAGINATION.MAX_LIMIT)
    .default(STARTUP_PAGINATION.DEFAULT_LIMIT),
});

export const startupParamsSchema = z.object({
  id: z.string().uuid("유효하지 않은 기업 ID 형식입니다."),
});

export const investmentQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),

  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(STARTUP_INVESTMENT_PAGINATION.MAX_LIMIT)
    .default(STARTUP_INVESTMENT_PAGINATION.DEFAULT_LIMIT),
});
