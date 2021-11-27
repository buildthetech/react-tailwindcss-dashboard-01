import { ComponentProps, MouseEventHandler } from "react";

const IconButton = ({
  title,
  Icon,
  type,
  disabled,
  onClick,
  onContextMenu,
  size,
  isGhost,
  badge,
  className,
}: {
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
  type: "primary" | "secondary" | "warning" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onContextMenu?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  isGhost?: boolean;
  badge?: string;
  className?: string;
}) => {
  return (
    <button
      disabled={disabled}
      title={title}
      onClick={onClick}
      onContextMenu={onContextMenu}
      className={`btn icon-btn ${type} ${size ? `size-${size}` : "size-md"} ${
        isGhost ? "ghost" : "not-ghost"
      } ${className}`}
    >
      <Icon className="icon" />
      {badge && <div className="badge">{badge}</div>}
    </button>
  );
};

export default IconButton;
