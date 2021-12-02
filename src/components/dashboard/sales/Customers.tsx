import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {},
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
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
      label: "Online Customers",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      borderColor: "#3B82F6",
      backgroundColor: "#3B82F6",
      yAxisID: "y",
    },
    {
      label: "Store Customers",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      borderColor: "#10B981",
      backgroundColor: "#10B981",
      yAxisID: "y",
    },
  ],
};

const Customers = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Customers</p>
          <div className="flex flex-row gap-5 items-start justify-center">
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-bold text-gray-700 dark:text-gray-300 text-2xl">
                523,201
              </h1>
              <div className="flex flex-row items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="text-sm opacity-80">Online Customers</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-bold text-gray-700 dark:text-gray-300 text-2xl">
                379,237
              </h1>
              <div className="flex flex-row items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-sm opacity-80">Store Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <select className="border card  px-2 py-1 rounded-md cursor-pointer outline-none">
            <option className="rounded-none">This week</option>
            <option className="rounded-none">This month</option>
            <option className="rounded-none">This year</option>
          </select>
        </div>
      </div>
      <Line options={options} height={220} data={data} className="flex-1" />
    </div>
  );
};

export default Customers;
