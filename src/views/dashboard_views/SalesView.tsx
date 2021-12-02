import React from "react";
import {
  RefreshIcon,
  PresentationChartBarIcon,
  ClipboardCheckIcon,
  UserIcon,
} from "@heroicons/react/outline";
import {
  RecentOrders,
  DonutesChart,
  Customers,
  TopProducts,
  WeeklyRevenue,
  SideBox,
} from "../../components/dashboard/sales";

const SalesView = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col p-4 lg:py-6 max-w-screen-2xl w-full mx-auto">
        <div className="flex gap-4 md:gap-6 w-full flex-col">
          <div className="grid grid-cols-5 gap-4 md:gap-6">
            <div className="flex-1 col-span-5 xl:col-span-3">
              <WeeklyRevenue />
            </div>
            <div className="grid gap-4 md:gap-6 xl:col-span-2 col-span-5 grid-cols-1 md:grid-cols-2">
              <div className="card p-4">
                <SideBox
                  Icon={ClipboardCheckIcon}
                  name="Total order"
                  count="11,831"
                  iconColor="text-green-600 bg-green-400 bg-opacity-20"
                />
              </div>
              <div className="card p-4">
                <SideBox
                  Icon={RefreshIcon}
                  name="Conversion rate"
                  count="26.9%"
                  iconColor="text-blue-600 bg-blue-300 bg-opacity-20"
                />
              </div>
              <div className="card p-4">
                <SideBox
                  Icon={PresentationChartBarIcon}
                  name="Total Profit"
                  count="$6,922"
                  iconColor="text-yellow-500 bg-yellow-200 bg-opacity-20"
                />
              </div>
              <div className="card p-4">
                <SideBox
                  Icon={UserIcon}
                  name="Daily visitors"
                  count="873"
                  iconColor="text-red-500 bg-red-200 bg-opacity-20"
                />
              </div>
            </div>
          </div>
          <div className="flex 2xl:col-span-3 lg:flex-row flex-col col-span-5 row gap-4 md:gap-6">
            <div className="flex-1 card p-6">
              <TopProducts />
            </div>
            <div className="flex-1 card p-6">
              <DonutesChart />
            </div>
            <div className="flex-1 card p-6">
              <Customers />
            </div>
          </div>
          <div className="flex-1 card p-6">
            <RecentOrders />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SalesView;
