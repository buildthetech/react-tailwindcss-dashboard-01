import React from 'react'

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
            label: "Page Views",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: "#3E82F7",
            yAxisID: "yAxis",
        },
        {
            barThickness: 6,
            label: "Session Duration",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: "#04D182",
            yAxisID: "yAxis",
        },
    ],
};

export default function UniqueVisitors() {
    return (
        <div className='card w-full p-4 flex flex-col'>
            <div className="flex flex-row items-center justify-between">
                <h1 className='text-lg font-semibold'>Unique Visitors</h1>
                <div className="flex">
                    <select className="border card  px-2 py-1 rounded-md cursor-pointer outline-none">
                        <option className="rounded-none">This week</option>
                        <option className="rounded-none">This month</option>
                        <option className="rounded-none">This year</option>
                    </select>
                </div>
            </div>
            <Bar options={options} data={data} height="150px" />
        </div>
    )
}
