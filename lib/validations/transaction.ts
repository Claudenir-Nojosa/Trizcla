import * as z from 'zod';

export const TransactionValidation = z.object({
  title: z.string().url().nonempty(),
  description: z.string().min(3).max(30),
  value: z.string().min(3).max(30),
  type: z.string(),
  accountId: z.string(),
})