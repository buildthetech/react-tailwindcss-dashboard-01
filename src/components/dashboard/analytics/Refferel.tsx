import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";

export default function Refferel({ 
    name, count,
     percentages,
      imgLink 
    }: {
         name: string,
          count: number,
           percentages: number,
            imgLink: string
         }) {
    return (
        <div className='w-full gap-4 pt-2 justify-between items-center flex flex-row'>
            <div className="flex flex-row gap-2 items-center">
                <img src={imgLink} className='w-8 h-8 rounded object-cover' alt="icon" />
                <div className="flex flex-col items-start">
                    <h1 className='text-lg font-semibold'>{name}</h1>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">Total:<span className="px-1 text-gray-500">{count.toLocaleString()}</span></p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <p className="text-sm font-medium">{percentages}%</p>
                {
                    percentages > 0 ?
                        <ArrowUpIcon className="text-green-500 w-3 h-3" />
                        :
                        <ArrowDownIcon className="w-3 h-3 text-red-500" />
                }
            </div>
        </div>
    )
}
