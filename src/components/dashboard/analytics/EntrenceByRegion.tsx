import CountryEntrencePercentages from "./CountryEntrencePercentages";

export default function EntrenceByRegion() {
    let entrencePercentages = 37.61;
    const couontryEntrenceData = [
        {
            name: 'United States of America',
            color: 'blue',
            percents: 37.61
        },
        {
            name: 'Brazil',
            color: 'green',
            percents: 16.79
        },
        {
            name: 'India',
            color: 'yellow',
            percents: 12.42
        },
        {
            name: 'China',
            color: 'gray',
            percents: 9.85
        },
        {
            name: 'Malaysia',
            color: 'red',
            percents: 7.68
        },
        {
            name: 'Thailand',
            color: 'purple',
            percents: 5.11
        },
    ]
    return (
        <div className="card w-full flex lg:flex-row flex-col">
            <div className="flex flex-col lg:w-80 w-full lg:border-r p-4 gap-8 border-gray-200 dark:border-gray-500 items-start">
                <h1 className="text-lg font-semibold">Entrance by region</h1>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex gap-2 flex-row items-center">
                        <img className="w-5 object-cover h-5" src="https://emilus.themenate.net/img/flags/us.png" alt="alt" />
                        <p className="font-semibold text-xl">{entrencePercentages} %</p>
                    </div>
                    <p className="dark:text-gray-300 text-gray-500">Top entrance region</p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    {
                        couontryEntrenceData.map((data, index) =>
                            <CountryEntrencePercentages key={index} name={data.name} color={data.color} percents={data.percents} />
                        )
                    }
                </div>
            </div>
            <div className="flex p-4 lg:flex-1 justify-center items-center">
                map
            </div>
        </div>
    )
}
