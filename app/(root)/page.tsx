"use client";
import { Button } from "@nextui-org/react";
import { Doughnut } from "react-chartjs-2";
import { data } from "@/components/charts/PieChart";

export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <p className="head-text text-[0.7rem] pt-4">
        Confira aqui o valor da sua carteira
      </p>
      <h1 className="head-text text-left bg-clip-text text-[2rem]">
        SUA CARTEIRA
      </h1>

      <span className="text-small-semibold pb-7 pt-4">Inserir valor aqui</span>
      <div className="flex gap-4  text-gray-950 dark:text-white">
        <Button
          className="outline-dark-2 h-[1.48rem] flex-1"
          color="transparent"
        >
          Receita
        </Button>
        <Button
          className="outline-dark-2 h-[1.48rem] flex-1"
          color="transparent"
        >
          Despesa
        </Button>
      </div>
      <Doughnut data={data} className="w-[230px] mt-10" />
    </div>
  );
}
