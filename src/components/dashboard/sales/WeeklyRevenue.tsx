import { CloudDownloadIcon } from "@heroicons/react/outline";
import { ArrowUpIcon } from "@heroicons/react/solid";
import { Button } from "../../buttons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "09 Jul",
  "10 Jul",
  "11 Jul",
  "12 Jul",
  "13 Jul",
  "14 Jul",
  "15 Jul",
];

export const data = {
  labels,
  datasets: [
    {
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
      label: "Earning",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#3E82F7",
      yAxisID: "yAxis",
    },
  ],
};

export default function WeeklyRevenue() {
  return (
    <div className="flex flex-col lg:flex-row p-4 h-full card gap-6">
      <div className="flex flex-col justify-between px-2">
        <div className="flex-col flex gap-2">
          <p className="text-lg font-medium">Weekly Revenue</p>
          <p className="">9 - 15 Jul, 2021</p>
        </div>
        <div className="flex flex-col mb-10 gap-3 flex-1 justify-center">
          <p className="text-3xl font-bold ">$27,188.00</p>
          <p className=" flex items-center text-green-400">
            <ArrowUpIcon className="w-4 h-4 mr-1" />{" "}
            <span> 17% growth from last week</span>
          </p>
          <p className="text-sm ">
            Total gross income figure based from the date range given above.
          </p>
        </div>
      </div>
      <div className="flex-1 items-end flex flex-col justify-between gap-4">
        <Button
          type="secondary"
          name="Download Report"
          Icon={CloudDownloadIcon}
          iconPos="left"
          size="md"
        />
        <Bar options={options} data={data} height="200px" />
      </div>
    </div>
  );
}
