import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { IconButton } from "../../buttons";

const data = [
  {
    name: "User 1",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    date: new Date().toString(),
    amount: 4516,
    status: "success",
  },
  {
    name: "User 2",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    date: new Date().toString(),
    amount: 4516,
    status: "success",
  },
  {
    name: "User 3",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    date: new Date().toString(),
    amount: 123,
    status: "Rejected",
  },
  {
    name: "User 4",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    date: new Date().toString(),
    amount: 2442,
    status: "Pending",
  },
  {
    name: "User 5",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    date: new Date().toString(),
    amount: 2325,
    status: "success",
  },
  {
    name: "User 6",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    date: new Date().toString(),
    amount: 123,
    status: "Rejected",
  },
];
const LatestTransactions = () => {
  return (
    <div className="flex flex-col p-4 lg:p-6 gap-4">
      <div className="flex flex-row justify-between items-center">
        <p className="pb-2 text-lg font-semibold">Latest Transactions</p>
        <IconButton
          Icon={DotsHorizontalIcon}
          size="md"
          type="secondary"
          title="See in details"
        />
      </div>
      <div className="">
        <div className="grid grid-cols-4 px-4 py-2 gap-2 border-b border-gray-100 dark:border-gray-700">
          <div className="font-medium ">
            <p>Customar</p>
          </div>
          <div className="font-medium">
            <p>Amount</p>
          </div>
          <div className="font-medium">
            <p>Date</p>
          </div>
          <div className="font-medium">
            <p>Status</p>
          </div>
        </div>
        {data.map((user, i) => (
          <button
            className="border-b border-gray-100 dark:border-gray-700 grid grid-cols-4 px-4 py-2 gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
            key={i}
          >
            <div className="items-center flex lg:text-base text-sm overflow-hidden flex-1">
              <div className="flex flex-row items-center gap-2 ">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="hidden md:block w-8 h-8 rounded-full"
                />
                <p className="font-medium truncate">{user.name}</p>
              </div>
            </div>
            <div className="items-center flex lg:text-base text-sm overflow-hidden">
              <p className="truncate">
                {"$"}
                {user.amount}
              </p>
            </div>
            <div className="items-center flex lg:text-base text-sm overflow-hidden">
              <p className="truncate">
                {new Date(user.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="items-center flex lg:text-base text-sm overflow-hidden">
              <div className={`status ${user.status}`}>
                <p>{user.status}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LatestTransactions;
