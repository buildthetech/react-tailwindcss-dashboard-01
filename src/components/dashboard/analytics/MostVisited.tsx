import VisitedPage from "./VisitedPage"

export const data = [
    {
        name: "Home",
        link: "/app/home/",
        count: 7616
    },
    {
        name: "Resources",
        link: "/app/resources/",
        count: 6923
    },
    {
        name: "Integrations",
        link: "/integrations/paypal/",
        count: 5228
    },
    {
        name: "Partners",
        link: "/partners/our-partners/",
        count: 3512
    },
    {
        name: "Developers",
        link: "developers/docs/",
        count: 1707
    },
]
export default function MostVisited() {
    return (
        <div className="card w-full p-4 flex gap-5 flex-col">
            <h1 className="font-semibold text-lg">Most visited pages</h1>
            <div className="flex flex-col w-full gap-3 dark:divide-gray-500  divide-y">
                {
                    data.map((page, index) =>
                        <VisitedPage name={page.name} link={page.link} count={page.count} key={index} />
                    )
                }
            </div>
        </div>
    )
}
