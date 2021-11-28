import { Outlet } from "react-router-dom";
import { AppBar } from "../components/dashboard";
import SideBar from "../components/dashboard/SideBar";
import { Actions } from "../constents";
import { useDashboard } from "../hooks/useDashboard";

const DashboardLayout = () => {
  const {
    state: { isSideBarHidden },
    dispatch,
  } = useDashboard();
  return (
    <div
      className={`w-screen h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative flex flex-col overflow-hidden`}
    >
      <AppBar />
      <div className="flex-1 flex flex-row overflow-hidden relative">
        <div
          className={`w-64 md:w-48 lg:w-64 md:static absolute ${isSideBarHidden ? "-left-full" : "left-0"
            } overflow-hidden h-full z-20 duration-300 ease-in-out`}
          style={{ transitionProperty: "left" }}
        >
          <SideBar />
        </div>
        <div className="flex-1 relative overflow-y-auto">
          <Outlet />
        </div>
        <div
          className={`absolute bg-black w-full h-full transition-colors duration-300 ${isSideBarHidden
            ? "bg-opacity-0 pointer-events-none"
            : "pointer-events-auto bg-opacity-70"
            }`}
          onClick={() => {
            dispatch({ type: Actions.TOOGLE_SIDE_BAR, hidden: true });
          }}
        ></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
