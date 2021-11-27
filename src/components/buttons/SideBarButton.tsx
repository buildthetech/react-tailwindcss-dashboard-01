import { ComponentProps, MouseEventHandler } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const SideBarButton = ({
  name,
  title,
  Icon,
  disabled,
  onClick,
  onContextMenu,
  badge,
  to,
}: {
  to: string;
  name: string;
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onContextMenu?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  badge?: string;
}) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to}>
      <button
        title={title}
        onClick={onClick}
        onContextMenu={onContextMenu}
        disabled={disabled}
        className={`h-10 w-full select-none flex flex-row items-center justify-start rounded-lg ring-0 active:ring-2 px-3 gap-2 ${
          match
            ? "bg-primary-500 border-primary-500 text-white ring-primary-500 ring-opacity-20"
            : "hover:bg-gray-50 dark:hover:bg-gray-700 border-opacity-0 ring-gray-200 dark:ring-gray-600"
        }`}
      >
        <Icon className="w-6 h-6" />
        <p className={`truncate flex-1 text-left`}>{name}</p>
        {badge && <p className="text-sm opacity-80">{badge}</p>}
      </button>
    </Link>
  );
};

export default SideBarButton;
