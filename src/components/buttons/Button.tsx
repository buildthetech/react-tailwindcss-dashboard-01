import { ComponentProps, MouseEventHandler } from "react";

const Button = ({
  name,
  title,
  Icon,
  type,
  iconPos,
  disabled,
  onClick,
  onContextMenu,
  size,
  isGhost,
}: {
  name: string;
  Icon?: (props: ComponentProps<"svg">) => JSX.Element;
  type: "primary" | "secondary" | "warning" | "success" | "danger";
  iconPos?: "left" | "right";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onContextMenu?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  isGhost?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      onContextMenu={onContextMenu}
      title={title}
      disabled={disabled}
      className={`btn ${type} ${iconPos ? `icon-${iconPos}` : "icon-left"} ${
        size ? `size-${size}` : "size-md"
      } ${isGhost ? "ghost" : "not-ghost"}`}
    >
      {Icon && (iconPos === undefined || iconPos === "left") && (
        <Icon className="icon" />
      )}
      <p>{name}</p>
      {Icon && iconPos === "right" && <Icon className="icon" />}
    </button>
  );
};

export default Button;
