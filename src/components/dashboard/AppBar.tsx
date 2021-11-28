import {
  BellIcon,
  CogIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "@heroicons/react/solid";
import { AvatarButton, IconButton } from "../buttons";
import { useDashboard } from "../../hooks/useDashboard";
import Logo from "../Logo";
import { Actions } from "../../constents";

const AppBar = ({ }: {}) => {
  const {
    state: { darkMode },
    dispatch,
  } = useDashboard();

  return (
    <div
      className={`flex flex-row px-4 h-14 gap-4 bg-white dark:bg-gray-800 shadow-md z-30`}
    >
      <div className="flex items-center justify-start gap-2 flex-1">
        <div className="block md:hidden">
          <IconButton
            Icon={MenuIcon}
            title="Dark Mode"
            size="md"
            type="secondary"
            onClick={() => {
              dispatch({ type: Actions.TOOGLE_SIDE_BAR });
            }}
          />
        </div>
        <Logo className="w-8 h-8" />
      </div>
      <div className="w-96 flex items-center">
        <form className="hidden md:flex w-full h-10 flex-row items-center px-2 rounded-lg border-gray-200 focus-within:border-gray-300 focus-within:bg-gray-100 border dark:border-gray-700 dark:focus-within:bg-gray-900 bg-white dark:bg-gray-800 focus-within:ring-2 ring-0 ring-primary-500 ring-opacity-40">
          <SearchIcon className="w-6 h-6" />
          <input
            type="text"
            className="outline-none w-full h-full px-2 bg-transparent"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="flex-1 flex items-center justify-end gap-0 md:gap-2 ">
        <IconButton
          Icon={SearchIcon}
          title="Dark Mode"
          size="md"
          type="secondary"
          className="flex md:hidden"
        />
        <IconButton
          Icon={darkMode ? MoonIcon : SunIcon}
          title="Dark Mode"
          size="md"
          type="secondary"
          onClick={() => dispatch({ type: Actions.TOOGLE_DARK_MODE })}
        />
        <IconButton
          Icon={BellIcon}
          title="Notification"
          type="secondary"
          badge="12"
        />
        <IconButton
          Icon={CogIcon}
          title="Settings"
          size="md"
          type="secondary"
        />
        <AvatarButton
          src="https://randomuser.me/api/portraits/men/11.jpg"
          size="md"
        />
      </div>
    </div>
  );
};

export default AppBar;
