"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { usePathname, useRouter } from "next/navigation";
import { TransactionValidation } from "@/lib/validations/transaction";
import { createTransaction } from "@/lib/actions/transaction.actions";

interface Props {
  userId: string;
}

const TransactionForm = ({ userId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(TransactionValidation),
    defaultValues: {
      title: "",
      description: "",
      value: "",
      type: "",
      accountId: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof TransactionValidation>) => {
    await createTransaction({
      type: values.type,
      title: values.title,
      description: values.description,
      value: values.value,
      path: pathname,
      author: userId,
    });

    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 "
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex gap-3 flex-col w-full">
              <FormLabel className="text-base-semibold text-gray-900 dark:text-light-2">
                Title
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="account-form_input no-focus "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex gap-3 flex-col w-full">
              <FormLabel className="text-base-semibold text-gray-900 dark:text-light-2">
                Description
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem className="flex gap-3 flex-col w-full">
              <FormLabel className="text-base-semibold text-gray-900 dark:text-light-2">
                Valor
              </FormLabel>
              <FormControl>
                <Input
                  type="string"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="flex gap-3 flex-col w-full">
              <FormLabel className="text-base-semibold text-gray-900 dark:text-light-2">
                type
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-primary-500" type="submit">
          Prosseguir
        </Button>
      </form>
    </Form>
  );
};

export default TransactionForm;
