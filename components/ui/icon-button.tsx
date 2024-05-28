import React, { MouseEventHandler } from "react";

import { cn } from "@/utils/lib";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactNode;
  className?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        (cn(
          "rounded-full flex items-center bg-white border shadow-md py-2 hover:scale-110 transition"
        ),
        className)
      }
    >
      {icon}
    </button>
  );
};

export default IconButton;
