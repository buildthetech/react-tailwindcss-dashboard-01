import { CloudDownloadIcon } from '@heroicons/react/outline'
import { ArrowUpIcon } from '@heroicons/react/solid'
import { Button } from '../../buttons'
import { BarChartComponent } from './BarChartComponent'

export default function WeeklyRevenue() {
    return (
        <div className='border flex flex-col lg:flex-row border-gray-200 dark:border-gray-700 px-2 py-2 h-full card w-full rounded-xl'>
            <div className="flex flex-col justify-between px-2">
                <div className="flex-col flex gap-2">
                    <p className='text-lg font-medium'>Weekly Revenue</p>
                    <p className=''>9 - 15 Jul, 2021</p>
                </div>
                <div className="flex flex-col mb-10 gap-3">
                    <h1 className='text-3xl font-bold '>$27,188.00</h1>
                    <h1 className=' flex items-center text-green-400'><ArrowUpIcon className='w-4 h-4 mr-1' /> <span> 17% growth from last week</span></h1>
                    <p className='text-sm '>Total gross income figure based from the date range given above.</p>
                </div>
            </div>
            <div className="flex-1 items-end flex flex-col gap-3 py-2 px-2">
                <Button
                    type="secondary"
                    name="Download Report"
                    Icon={CloudDownloadIcon}
                    iconPos="left"
                    size="md"
                />
                <div className="flex w-full">
                    <BarChartComponent />
                </div>
            </div>
        </div>
    )
}
