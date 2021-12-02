import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import React from 'react'

export default function Products({
    name,
    type,
    sale,
    img,
    saleincrease
}: {
    name: string;
    type: string;
    sale: number;
    img: string;
    saleincrease: boolean

}) {
    return (
        <div className='flex flex-row justify-between items-center'>
            <div className="flex flex-row gap-2">
                <div className="flex w-12 h-12 rounded-md">
                    <img className='w-full rounded-md h-full object-cover' src={img} alt="product_image" />
                </div>
                <div className="flex flex-col">
                    <h1 className='font-medium text-gray-700 dark:text-gray-300'>{name}</h1>
                    <h1 className='text-gray-400'>{type}</h1>
                </div>
            </div>
            <div className="flex items-end flex-col">
                <p className='text-gray-500 dark:text-gray-300'>Sales</p>
                <div className="flex flex-row items-center gap-1">
                    <h1 className='text-gray-700 dark:text-gray-400 font-bold'>${sale.toLocaleString()}</h1>
                    {
                        saleincrease ?
                            <ArrowUpIcon className='w-4 h-4 text-green-500' />
                            :
                            <ArrowDownIcon className='w-4 h-4 text-red-500' />
                    }
                </div>
            </div>
        </div>
    )
}
