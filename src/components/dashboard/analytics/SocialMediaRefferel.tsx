import Refferel from "./Refferel"

export const data = [
    {
        name: "Facebook",
        count: 322,
        percentages: 30.1,
        imgLink: "https://i.ibb.co/ZHW7ZVb/image-removebg-preview-4.png"
    },
    {
        name: "Twitter",
        count: 217,
        percentages: 21.6,
        imgLink: "https://i.ibb.co/FDBCNRy/image-removebg-preview-5.png"
    },
    {
        name: "Youtube",
        count: 188,
        percentages: -7.1,
        imgLink: "https://i.ibb.co/GV7X4Hn/image-removebg-preview-6.png"
    },
    {
        name: "Linkdin",
        count: 207,
        percentages: 11.9,
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6daj4CN6qpihkDq_L-CATcJgjQYMoZpD6Pw&usqp=CAU"
    },
    {
        name: "Dribble",
        count: 86,
        percentages: -28.5,
        imgLink: "https://i.ibb.co/6ZCKmMv/image-removebg-preview-7.png"
    },
]
export default function SocialMediaRefferel() {
    return (
        <div className='card p-4 flex flex-col w-full gap-5'>
            <h1 className='text-lg font-semibold'>Social media referrals</h1>
            <div className="flex gap-3 divide-gray-300 dark:divide-gray-500 divide-y flex-col">
                {
                    data.map((media, index) =>
                        <Refferel key={index} name={media.name} count={media.count} percentages={media.percentages} imgLink={media.imgLink} />
                    )
                }
            </div>
        </div>
    )
}
