import { MouseEventHandler } from "react";

const AvatarButton = ({
  size,
  src,
  alt,
  disabled,
  onClick,
  onContextMenu,
  title,
}: {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onContextMenu?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onContextMenu={onContextMenu}
      title={title}
      className={`btn avatar-btn ${size ? `size-${size}` : "size-md"}`}
    >
      <img src={src} alt={alt || "Avatar"} className="avatar-img" />
    </button>
  );
};

export default AvatarButton;
