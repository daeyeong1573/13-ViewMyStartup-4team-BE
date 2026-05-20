import { z } from "zod";
const STARTUP = {
  RECENT_MY_STARTUP_DEFAULT_LIMIT: 5,
  RECENT_MY_STARTUP_MAX_LIMIT: 5,
};

export const recentMyStartupQuerySchema = z.object({
  search: z.string().trim().optional(),
  limit: z
    .string()
    .optional()
    .transform((val) =>
      val ? parseInt(val, 10) : STARTUP.RECENT_MY_STARTUP_DEFAULT_LIMIT,
    )
    .pipe(z.number().int().min(1).max(STARTUP.RECENT_MY_STARTUP_MAX_LIMIT)),
});
