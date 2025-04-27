// MenuItem.tsx
import React, { JSX } from "react";
import MenuItemIcon from "./menu-item-icon";

interface MenuItemProps {
  item: {
    name: string;
    url: string;
    icon: JSX.Element;
    dataKey: string;
  };
  index: number;
  hoverIndex: number | null;
  iconSize: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  index,
  hoverIndex,
  iconSize,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <div
      className={`
        menu-item text-white/80 cursor-pointer block
        text-[clamp(1rem,6vw,3rem)] py-[clamp(0.25rem,0.5vw,1rem)] pr-0 pl-0 
        no-underline transition-all duration-400 ease-in-out
        ${
          hoverIndex !== null && hoverIndex !== index
            ? "opacity-20 scale-95"
            : "opacity-100 scale-100"
        }
        ${hoverIndex === index ? "text-white" : ""}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="flex items-center md:my-0 my-5">
        <MenuItemIcon
          icon={item.icon}
          isHovered={hoverIndex === index}
          iconSize={iconSize}
        />
        {item.name}
      </div>
    </div>
  );
};

export default MenuItem;
