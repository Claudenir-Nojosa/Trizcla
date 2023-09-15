"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { usePathname, useRouter } from "next/navigation";
import { ExpenseValidation } from "@/lib/validations/expense";
import { createExpense } from "@/lib/actions/expense.actions";

interface Props {
  userId: string;
}

const ExpenseForm = ({ userId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const form = useForm({
    resolver: zodResolver(ExpenseValidation),
    defaultValues: {
      description: "",
      value: "",
      accountId: "",
      date: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof ExpenseValidation>) => {
    await createExpense({
      description: values.description,
      value: values.value,
      path: pathname,
      author: userId,
      date: values.date,
    });

    router.push("/");
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" className="w-[150px]">
        Adicionar Despesa
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Adicionar Despesa
              </ModalHeader>
              <ModalBody>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col justify-start gap-10 "
                  >
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="flex gap-3 flex-col w-full">
                          <FormLabel className="text-base-semibold text-gray-900 dark:text-light-2">
                            Descrição
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
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex gap-3 flex-col w-full">
                          <FormLabel className="text-base-semibold text-gray-900 dark:text-light-2">
                            type
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="account-form_input no-focus"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      className="bg-primary-500"
                      type="submit"
                      onPress={onClose}
                    >
                      Cancelar
                    </Button>
                    <Button className="bg-primary-500" type="submit">
                      Prosseguir
                    </Button>
                  </form>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExpenseForm;
