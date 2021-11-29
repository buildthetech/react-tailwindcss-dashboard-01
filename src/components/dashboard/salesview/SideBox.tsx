import React, { Component, ComponentProps } from 'react'

export default function SideBox({
    Icon,
    name,
    count,
    iconColor
}: {
    Icon: (props: ComponentProps<"svg">) => JSX.Element;
    name: string;
    count: string,
    iconColor?: string
}) {
    return (
        <div className='flex flex-col bg-white px-4 py-4 items-center justify-center border border-gray-200 dark:border-gray-700 card rounded-xl'>
            <button className={`rounded-md w-12 h-12 px-3 py-2 ${iconColor}`}>
                <Icon />
            </button>
            <div className="flex items-center flex-col py-3">
                <p className='text-xl font-medium'>
                    {count}
                </p>
                <p className='text-gray-400 text-sm'>
                    {name}
                </p>
            </div>
        </div>
    )
}
