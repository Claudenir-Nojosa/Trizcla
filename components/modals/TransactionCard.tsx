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


export default function TransactionModalForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop]: any = React.useState("blur");
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const variants = ["underlined"];

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };
  return (
    <>
      <Button onPress={onOpen} className="bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 ">
        Nova Movimentação
      </Button>
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
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
                      <Select
                        variant={variant as any}
                        label="Selecione o tipo"
                      >
                        {typesOfTransactions.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
