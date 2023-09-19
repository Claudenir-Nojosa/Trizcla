import * as z from "zod";

export const IncomeValidation = z.object({
  description: z
    .string()
    .min(3, { message: "Precisa conter ao menos três caracteres" })
    .max(30, { message: "Limite máximo de caracteres" }),
  value: z.coerce
    .number({
      required_error: "Valor é obrigatório",
      invalid_type_error: "Valor tem que ser um número",
    })
    .gte(0.001, { message: "Valor inválido" })
    .nonnegative(),
  accountId: z.string(),
  date: z.string().min(1, { message: "Favor inserir a data" }),
});
