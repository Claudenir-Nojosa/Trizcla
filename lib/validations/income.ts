import * as z from "zod";

export const IncomeValidation = z.object({
  description: z.string().min(3).max(30),
  value: z.string(),
  accountId: z.string(),
  date: z.string(),
});
