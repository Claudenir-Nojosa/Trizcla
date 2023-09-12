"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <p className="head-text text-[0.55rem] pt-4">
        Confira aqui o valor da sua carteira
      </p>
      <h1 className="head-text text-left bg-clip-text text-[1.6rem]">
        SUA CARTEIRA
      </h1>
      <span className="text-small-semibold pb-7 pt-4">R$ 2.000.00</span>
      <div className="flex gap-4">
        <Button
          className="bg-dark-2 text-small-regular h-[1.48rem] text-white shadow-lg"
          color="default"
        >
          Receita
        </Button>
        <Button
          className="bg-dark-2 text-small-regular h-[1.48rem] text-white shadow-lg"
          color="default"
        >
          Despesa
        </Button>
      </div>
    </div>
  );
}
