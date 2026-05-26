import { z } from "zod";

export const investmentParamsSchema = z.object({
  id: z.string().uuid("유효하지 않은 투자 ID입니다."),
});

export const updateInvestmentBodySchema = z
  .object({
    amount: z.coerce
      .bigint()
      .positive("투자 금액은 0보다 커야 합니다.")
      .optional(),

    comment: z.string().min(1, "코멘트를 입력해주세요.").optional(),

    password: z.string().min(1, "비밀번호를 입력해주세요."),
  })
  .refine((data) => data.amount !== undefined || data.comment !== undefined, {
    message: "수정할 값을 하나 이상 입력해주세요.",
    path: ["root"],
  });

export const deleteInvestmentBodySchema = z.object({
  password: z.string().min(1, "비밀번호를 입력해주세요."),
});
