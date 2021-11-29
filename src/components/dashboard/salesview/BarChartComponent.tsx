import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

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
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['09 Jul', '10 Jul', '11 Jul', '12 Jul', '13 Jul', '14 Jul', '15 Jul'];

export const data = {
    labels,
    datasets: [
        {
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            label: 'Earning',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: '#3E82F7',
            yAxisID: 'yAxis'
        }
    ],
};

export function BarChartComponent() {
    return <Bar options={options} data={data} />;
}
