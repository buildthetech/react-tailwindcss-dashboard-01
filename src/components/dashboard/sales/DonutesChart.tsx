import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Cloths", "Device", "Bags", "Watches"],
  datasets: [
    {
      label: "# of Votes",
      data: [3561, 1443, 2462, 1693],
      backgroundColor: ["#3E82F7", "#04D182", "#FFC107", "#FA8C16"],
      fill: false,
    },
  ],
  options: {
    legend: {
      display: false,
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          display: false,
        },
      },
    },
    responsive: true,
  },
};

export default function DonutesChart() {
  return (
    <div className="flex flex-col gap-8 items-center justify-between h-full">
      <div className="w-80">
        <Doughnut
          options={{
            animation: { animateRotate: true },
          }}
          data={data}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        {data.datasets[0].data.map((item, i) => (
          <div key={i} className="flex flow-row flex-1 justify-between items-center gap-4 w-full">
            <div className="flex flex-row items-center gap-4">
              <div
                className="div w-2 h-2 rounded-full"
                style={{ background: data.datasets[0].backgroundColor[i] }}
              ></div>
              <p className="text-gray-600 dark:text-gray-400 font-normal">
                {data.labels[i]}
              </p>
            </div>
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
