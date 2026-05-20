import { z } from "zod";

const STARTUP_PAGINATION = {
  DEFAULT_LIMIT: 10,
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
