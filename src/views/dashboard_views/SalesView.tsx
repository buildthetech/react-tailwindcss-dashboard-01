import React from "react";
import SideBox from "../../components/dashboard/salesview/SideBox";
import WeeklyRevenue from "../../components/dashboard/salesview/WeeklyRevenue";
import { RefreshIcon, PresentationChartBarIcon, ClipboardCheckIcon, UserIcon } from "@heroicons/react/outline";
import Customers from "../../components/dashboard/salesview/Customers";
import TopProducts from "../../components/dashboard/salesview/TopProducts";
import DonutesChart from "../../components/dashboard/salesview/DonutesChart";
import RecentOrders from "../../components/dashboard/salesview/RecentOrders";
const SalesView = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col px-4 py-4 lg:py-6 max-w-screen-2xl w-full mx-auto">
        <div className="flex gap-3 w-full flex-col">
          <div className="grid grid-cols-5 gap-3">
            <div className="flex-1 col-span-5 xl:col-span-3">
              <WeeklyRevenue />
            </div>
            <div className="grid gap-3 xl:col-span-2 col-span-5 grid-cols-1 md:grid-cols-2">
              <div className="w-full">
                <SideBox Icon={ClipboardCheckIcon} name='Total order' count="11,831" iconColor="text-green-600 bg-green-400 bg-opacity-20" />
              </div>
              <div className="w-full">
                <SideBox Icon={RefreshIcon} name='Conversion rate' count="26.9%" iconColor="text-blue-600 bg-blue-300 bg-opacity-20" />
              </div>
              <div className="w-full">
                <SideBox Icon={PresentationChartBarIcon} name='Total Profit' count="$6,922" iconColor="text-yellow-500 bg-yellow-200 bg-opacity-20" />
              </div>
              <div className="w-full">
                <SideBox Icon={UserIcon} name='Daily visitors' count="873" iconColor="text-red-500 bg-red-200 bg-opacity-20" />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-5 gap-3">
            <div className="flex 2xl:col-span-3 lg:flex-row flex-col col-span-5 row gap-3">
              <div className="flex w-full">
                <TopProducts />
              </div>
              <div className="flex w-full">
                <DonutesChart />
              </div>
            </div>
            <div className="w-full col-span-5 2xl:col-span-2">
              <Customers />
            </div>
          </div>
          <div className="flex w-full flex-row">
            <RecentOrders />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default SalesView;
