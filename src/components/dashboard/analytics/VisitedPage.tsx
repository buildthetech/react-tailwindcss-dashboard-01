export default function VisitedPage({
     name,
      count,
       link 
    }: {
         name: string,
          count: number,
           link: string 
        }) {
    return (
        <div className='items-center flex flex-row pt-2 justify-between gap-4'>
            <div className="flex flex-col">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-sm text-gray-400 dark:text-gray-500">{link}</p>
            </div>
            <button className="status ready float-right font-semibold">{count.toLocaleString()}</button>
        </div>
    )
}
