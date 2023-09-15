import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Despesa", "Receita"],
  datasets: [
    {
      label: "Porcentagem",
      data: [50, 50],
      backgroundColor: [
        "rgba(239, 68, 68, 0.2)",
        "rgba(22, 160, 133, 0.2)",
      ],
      borderColor: [
        "rgba(239, 68, 68, 1)",
        "rgba(22, 160, 133, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
