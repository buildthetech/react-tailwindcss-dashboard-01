import React, { Component, ComponentProps } from "react";

export default function SideBox({
  Icon,
  name,
  count,
  iconColor,
}: {
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
  name: string;
  count: string;
  iconColor?: string;
}) {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <button className={`rounded-md w-12 h-12 px-3 py-2 ${iconColor}`}>
        <Icon />
      </button>
      <div className="flex items-center flex-col pt-4">
        <p className="text-xl font-medium">{count}</p>
        <p className="text-gray-400 text-sm">{name}</p>
      </div>
    </div>
  );
}
