export default function RecentOrders() {
    const data = [
        {
            id: 84546,
            name: 'User 1',
            Total: 5930,
            img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            orderStatus: 'Ready',
            paymentStatus: "Paid",
            date: new Date().toString()
        },
        {
            id: 34546,
            name: 'User 2',
            Total: 5930,
            img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            orderStatus: 'Ready',
            paymentStatus: "Paid",
            date: new Date().toString()
        },
        {
            id: 20546,
            name: 'User 3',
            Total: 5930,
            img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            orderStatus: 'Shipped',
            paymentStatus: "Pending",
            date: new Date().toString()
        },
        {
            id: 42546,
            name: 'User 4',
            Total: 5930,
            img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            orderStatus: 'Ready',
            paymentStatus: "Paid",
            date: new Date().toString()
        },
        {
            id: 29546,
            name: 'User 5',
            Total: 5930,
            img: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            orderStatus: 'Shipped',
            paymentStatus: "Paid",
            date: new Date().toString()
        },
        {
            id: 60546,
            name: 'User 6',
            Total: 5930,
            img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            orderStatus: 'Ready',
            paymentStatus: "Pending",
            date: new Date().toString()
        },
    ]
    return (
        <div className='card border border-gray-200 dark:border-gray-700 p-6 rounded-xl w-full'>
            <div className="flex flex-col w-full gap-4">
                <p className='font-medium text-lg'>Recent orders</p>
                <div className="flex flex-col overflow-x-auto">
                    <div style={{ minWidth: "45rem" }} className="grid lg:overflow-x-hidden overflow-x-visible border-b dark:border-gray-600 pb-2 px-2 grid-cols-6">
                        <div>
                            <p className='font-medium'>Id</p>
                        </div>
                        <div>
                            <p className='font-medium'>Name</p>
                        </div>
                        <div>
                            <p className='font-medium'>Date</p>
                        </div>
                        <div>
                            <p className='font-medium'>Order Status</p>
                        </div>
                        <div>
                            <p className='font-medium'>Payment Status</p>
                        </div>
                        <div>
                            <p className='font-medium'>Total</p>
                        </div>
                    </div>
                    {
                        data.map((user, i) => (
                            <div key={i} style={{ minWidth: "45rem" }} className="grid lg:overflow-x-hidden overflow-x-visible border-b dark:border-gray-600 pb-3 items-center px-2 grid-cols-6">
                                <div className=''>
                                    <p className='truncate'>#{user.id}</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={user.img} className="w-6 h-6 rounded-full object-cover" alt="" />
                                    <p className='truncate'>{user.name}</p>
                                </div>
                                <div className=''>
                                    <p className='truncate'>
                                        {new Date(user.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div className='mt-1'>
                                    <button className={`truncate text-sm ${user.orderStatus === 'Ready' ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"} rounded py-1 px-2`}>
                                        {user.orderStatus}
                                    </button>
                                </div>
                                <div className='items-center flex gap-2'>
                                    {
                                        user.paymentStatus === 'Paid' ?
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            :
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                    }
                                    <p className='truncate'>
                                        {user.paymentStatus}
                                    </p>
                                </div>
                                <div className=''>
                                    <p className='truncate'>{user.Total}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
