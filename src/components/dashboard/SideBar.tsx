import {
  CurrencyDollarIcon,
  TemplateIcon,
  TrendingUpIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { MouseEventHandler } from "react";
import { Actions } from "../../constents";
import { useDashboard } from "../../hooks/useDashboard";
import { SideBarButton } from "../buttons";

const SideBar = () => {
  const { dispatch } = useDashboard();
  return (
    <aside
      className={`w-full h-full bg-white dark:bg-gray-800 flex flex-col p-4 gap-1`}
    >
      <SideBarButton
        onClick={() => {
          dispatch({ type: Actions.TOOGLE_SIDE_BAR, hidden: true });
        }}
        name="Overview"
        Icon={TemplateIcon}
        to=""
      />
      <SideBarButton
        onClick={() => {
          dispatch({ type: Actions.TOOGLE_SIDE_BAR, hidden: true });
        }}
        name="Analytics"
        Icon={TrendingUpIcon}
        to="analytics"
      />
      <SideBarButton
        onClick={() => {
          dispatch({ type: Actions.TOOGLE_SIDE_BAR, hidden: true });
        }}
        name="Sales"
        Icon={CurrencyDollarIcon}
        to="sales"
      />
      <SideBarButton
        onClick={() => {
          dispatch({ type: Actions.TOOGLE_SIDE_BAR, hidden: true });
        }}
        name="Components"
        Icon={ViewGridIcon}
        to="components"
      />
    </aside>
  );
};

export default SideBar;
