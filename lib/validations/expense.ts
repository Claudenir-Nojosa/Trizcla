import * as z from "zod";

export const ExpenseValidation = z.object({
  description: z
    .string()
    .min(3, { message: "Precisa conter ao menos três caracteres" })
    .max(30, { message: "Limite máximo de caracteres" }),
  value: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Um valor é obrigatório",
    })
    .transform((value) => Number(value)),
  accountId: z.string(),
  date: z.string().min(1, { message: "Favor inserir a data" }),
});
