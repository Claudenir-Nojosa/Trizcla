"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { typesOfTransactions } from "@/lib/types";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionValidation } from "@/lib/validations/transaction";
import { createTransaction } from "@/lib/actions/transaction.actions";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function TransactionModalForm({ userId }: { userId: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop]: any = React.useState("blur");
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const variants = ["underlined"];
  const router = useRouter();
  const pathname = usePathname();

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const form = useForm({
    resolver: zodResolver(TransactionValidation),
    defaultValues: {
      title: "",
      description: "",
      value: "",
      type: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof TransactionValidation>) => {
    await createTransaction({
      title: values.title,
      description: values.description,
      value: values.value,
      type: values.type,
      author: userId,
      path: pathname,
    });

    router.push("/");
  };

  return (
    <div>
      <Button
        onPress={onOpen}
        className="bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 "
      >
        Nova Movimentação
      </Button>
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        {...form}
      >
        <ModalContent>
          {(onClose) => (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-start gap-10 "
            >
              <ModalHeader className="flex flex-col gap-1">
                Nova Transação
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Titulo"
                  placeholder="Digite o titulo da movimentação"
                  variant="bordered"
                />
                <Input
                  label="Descrição"
                  placeholder="Digite a descrição da movimentação"
                  variant="bordered"
                />
                <Input
                  label="Valor"
                  placeholder="Digite o valor da movimentação"
                  variant="bordered"
                  type="number"
                />
                <div className="w-full flex flex-col gap-4">
                  {variants.map((variant) => (
                    <div
                      key={variant}
                      className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                    >
                      <Select variant={variant as any} label="Selecione o tipo">
                        {typesOfTransactions.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  ))}
                </div>
                <Button type="submit">Clicar</Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fechar
                </Button>
                <Button color="primary" type="submit" onPress={onClose}>
                  Enviar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
