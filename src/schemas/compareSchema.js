import { z } from "zod";

const COMPARE_STARTUP = {
  MIN: 1,
  MAX: 5,
};

export const compareSelectionSchema = z.object({
  myStartupId: z.uuid(),
  compareStartupIds: z
    .array(z.uuid())
    .min(COMPARE_STARTUP.MIN, "비교 기업은 최소 1개 이상이어야 합니다")
    .max(COMPARE_STARTUP.MAX, "비교 기업은 최대 5개까지 선택 가능합니다"),
});
