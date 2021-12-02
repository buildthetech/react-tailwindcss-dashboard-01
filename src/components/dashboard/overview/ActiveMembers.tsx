import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
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
  legend: {
    display: false,
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {},
  scales: {
    xAxis: {},
    y: {
      display: false,
    },
  },
};

const labels = ["02 Mar", "06 Mar", "10 Mar", "14 Mar", "18 Mar", "22 Mar"];
export const data = {
  labels,
  datasets: [
    {
      label: "Members",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#10B981",
      backgroundColor: "#10B981",
      yAxisID: "y",
    },
  ],
};
const ActiveMembers = () => {
  const amount = 43568;
  const rate = 5.7;
  return (
    <div className="p-6 flex flex-col justify-between gap-4 h-full">
      <p className="text-lg font-bold">Active Members</p>
      <div className="flex flex-row gap-3 items-center flex-1 overflow-hidden">
        <p
          className="text-4xl font-bold truncate"
          title={amount.toLocaleString()}
        >
          {amount.toLocaleString()}
        </p>
        <div
          className={`flex flex-row items-center justify-center text-lg font-semibold ${rate < 0 ? "text-red-500" : "text-green-500"
            }`}
          title={rate.toLocaleString()}
        >
          <p>{rate}</p>
          {rate < 0 ? (
            <ArrowDownIcon className="w-5 h-5" />
          ) : (
            <ArrowUpIcon className="w-5 h-5" />
          )}
        </div>
      </div>
      <Line options={options} data={data} height={120} />
    </div>
  );
};

export default ActiveMembers;
