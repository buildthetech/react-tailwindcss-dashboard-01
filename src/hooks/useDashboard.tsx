import { createContext, useContext, useEffect, useReducer } from "react";
import { Actions, THEME_KEY } from "../constents";

export type DashboardContextType = {
  darkMode: boolean;
  isSideBarHidden: boolean;
};
export const DashboardContext = createContext<{
  state: DashboardContextType;
  dispatch: React.Dispatch<DashboardContextActionType>;
} | null>(null);

type DarkModeToggleActionType = {
  type: Actions.TOOGLE_DARK_MODE;
};
type SideBarToggleActionType = {
  type: Actions.TOOGLE_SIDE_BAR;
  hidden?: boolean;
};

type DashboardContextActionType =
  | DarkModeToggleActionType
  | SideBarToggleActionType;

export const reducer = (
  state: DashboardContextType,
  action: DashboardContextActionType
): DashboardContextType => {
  switch (action.type) {
    case Actions.TOOGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    case Actions.TOOGLE_SIDE_BAR:
      return {
        ...state,
        isSideBarHidden:
          action.hidden !== undefined ? action.hidden : !state.isSideBarHidden,
      };
    default:
      return state;
  }
};
export const DashboardProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, {
    darkMode: localStorage.getItem(THEME_KEY) ? true : false,
    isSideBarHidden: true,
  } as DashboardContextType);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem(THEME_KEY);
    if (state.darkMode) {
      localStorage.setItem(THEME_KEY, "dark");
      document.documentElement.classList.add("dark");
    }
  }, [state.darkMode]);
  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("Context not working!");
  }
  return context;
};
