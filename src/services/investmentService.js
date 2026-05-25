import prisma from "../lib/prisma.js";
import { NotFoundError, ValidationError } from "../utils/errors.js";

export async function updateInvestment(id, { amount, comment, password }) {
  const investment = await prisma.virtualInvestment.findUnique({
    where: { id },
  });

  if (!investment) {
    throw new NotFoundError("해당 투자를 찾을 수 없습니다.");
  }

  if (investment.password !== password) {
    throw new ValidationError("비밀번호가 일치하지 않습니다.");
  }

  const updatedData = await prisma.virtualInvestment.update({
    where: { id },
    data: {
      ...(amount !== undefined && { amount }),
      ...(comment !== undefined && { comment }),
    },
    select: {
      id: true,
      investorName: true,
      amount: true,
      comment: true,
      updatedAt: true,
    },
  });

  return {
    id: updatedData.id,
    investorName: updatedData.investorName,
    amount: updatedData.amount.toString(),
    comment: updatedData.comment,
    updatedAt: updatedData.updatedAt,
  };
}

export async function removeInvestment(id, { password }) {
  const investment = await prisma.virtualInvestment.findUnique({
    where: { id },
  });

  if (!investment) {
    throw new NotFoundError("해당 투자를 찾을 수 없습니다.");
  }

  if (investment.password !== password) {
    throw new ValidationError("비밀번호가 일치하지 않습니다.");
  }

  await prisma.virtualInvestment.delete({
    where: { id },
  });

  return;
}
