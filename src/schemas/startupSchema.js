import { z } from "zod";

const STARTUP_PAGINATION = {
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

// val ? parseInt(num, 10) = 문자를 정수로 전환
export const startupListQuerySchema = z.object({
  search: z.string().trim().optional(),

  page: z
    .string()
    .optional()
    .transform((num) => (num ? parseInt(num, 10) : 1))
    .pipe(z.number().int().min(1)),

  limit: z
    .string()
    .optional()
    .transform((num) =>
      num ? parseInt(num, 10) : STARTUP_PAGINATION.DEFAULT_LIMIT,
    )
    .pipe(z.number().int().min(1).max(STARTUP_PAGINATION.MAX_LIMIT)),
});
