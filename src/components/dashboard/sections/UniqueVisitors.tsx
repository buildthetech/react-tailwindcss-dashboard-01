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
  "02 Mar",
  "04 Mar",
  "06 Mar",
  "08 Mar",
  "10 Mar",
  "12 Mar",
  "14 Mar",
  "16 Mar",
  "18 Mar",
  "20 Mar",
  "22 Mar",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Session Duration",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#3B82F6",
      backgroundColor: "#3B82F6",
      yAxisID: "y",
    },
    {
      label: "Page Views",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#10B981",
      backgroundColor: "#10B981",
      yAxisID: "y",
    }
  ],
};

const ChartUniqueVisitors = () => {
  return (
    <div className="flex flex-col gap-4 p-6 w-full h-full">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
        <p className="text-lg font-semibold">Unique Visitors</p>
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="flex flex-row items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <p className="text-sm opacity-80">Session Duration</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <p className="text-sm opacity-80">Page Views</p>
          </div>
        </div>
      </div>
      <Line options={options} data={data} height={100} className="flex-1" />
    </div>
  );
};

export default ChartUniqueVisitors;
