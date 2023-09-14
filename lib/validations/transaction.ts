import * as z from 'zod';

export const TransactionValidation = z.object({
  title: z.string().min(3).max(30),
  description: z.string().min(3).max(30),
  value: z.string(),
  type: z.string(),
  accountId: z.string(),
})