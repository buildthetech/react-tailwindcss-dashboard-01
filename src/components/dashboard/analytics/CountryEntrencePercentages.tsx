export default function CountryEntrencePercentages({
    name,
    percents,
    color
}: {
    name: string,
    percents: number,
    color: string
}) {
    return (
        <div className='flex gap-4 w-full items-center justify-between'>
            <div className="flex gap-2 items-center">
                <button className={`w-2 rounded-full h-2 bg-${color}-500`}></button>
                <p className="text-gray-500 dark:text-gray-300">{name}</p>
            </div>
            <p className='float-right text-sm font-medium'>{percents}%</p>
        </div>
    )
}
