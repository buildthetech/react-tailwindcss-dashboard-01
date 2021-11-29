import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Cloths', 'Device', 'Bags', 'Watches'],
    datasets: [
        {
            label: '# of Votes',
            data: [3561, 1443, 2462, 1693],
            backgroundColor: [
                '#3E82F7',
                '#04D182',
                '#FFC107',
                '#FA8C16',
            ],
            fill: false,
            borderColor: "rgba(0,0,0,0)"
        },
    ],
    options: {
        legend: {
            display: false,
            plugins: {
                datalabels: {
                    display: false,
                }
            }
        },
        responsive: true,

    }
};

export default function DonutesChart() {
    return (
        <div className="bg-white rounded-xl w-full card p-6">
            <div className="flex flex-col gap-8 items-center">
                <Doughnut options={{ animation: { animateRotate: true }, }} data={data} />
                <div className="flex flex-col w-full px-4 sm:w-80 gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="div w-2 h-2 rounded-full" style={{ background: '#3E82F7' }}></div>
                            <p className='text-gray-600 dark:text-gray-400 font-normal'>Clothes</p>
                        </div>
                        <div className="flex">
                            <p className='font-medium'>3561</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="div w-2 h-2 rounded-full" style={{ background: '#04D182' }}></div>
                            <p className='text-gray-600 dark:text-gray-400 font-normal'>Device</p>
                        </div>
                        <div className="flex">
                            <p className='font-medium'>1443</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="div w-2 h-2 rounded-full" style={{ background: '#FFC107' }}></div>
                            <p className='text-gray-600 dark:text-gray-400 font-normal'>Bags</p>
                        </div>
                        <div className="flex">
                            <p className='font-medium'>2462</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="div w-2 h-2 rounded-full" style={{ background: '#FA8C16' }}></div>
                            <p className='text-gray-600 dark:text-gray-400 font-normal'>Watches</p>
                        </div>
                        <div className="flex">
                            <p className='font-medium'>1693</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
