"use client";

import React, { useState } from "react";

const AnimatedMenu: React.FC = () => {
  const [hoverIndex, sethoverIndex] = useState<number | null>(null);
  const menuItems = ["Home", "Blog", "Experience", "Contact Me"];

  return (
    <div className="bg-[#141414] m-0 h-screen w-screen">
      <div
        id="menu"
        className="flex items-center h-screen w-screen"
        data-active-index={hoverIndex !== null ? hoverIndex : undefined}
      >
        <div
          id="menu-items"
          className="ml-[clamp(4rem,20vw,48rem)] relative z-[2]"
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`
                menu-item text-white/80 cursor-pointer block 
                text-[clamp(3rem,8vw,8rem)] py-[clamp(0.25rem,0.5vw,1rem)] pr-0 pl-0 
                no-underline transition-all duration-400 ease-in-out
                ${
                  hoverIndex !== null && hoverIndex !== index
                    ? "opacity-20 scale-95"
                    : "opacity-100 scale-100"
                }
                ${hoverIndex === index ? "text-white" : ""}
              `}
              onMouseOver={() => sethoverIndex(index)}
              onMouseOut={() => sethoverIndex(null)}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          id="menu-background-image"
          className={`
            bg-[url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            h-full w-full left-0 top-0 absolute
            transition-[opacity,background-size,background-position] duration-800 ease-in-out z-0
            ${hoverIndex === 0 ? "bg-[position:center_45%]" : ""}
            ${hoverIndex === 1 ? "bg-[position:center_50%]" : ""}
            ${hoverIndex === 2 ? "bg-[position:center_55%]" : ""}
            ${hoverIndex === 3 ? "bg-[position:center_60%]" : ""}
            ${hoverIndex !== null ? "" : "bg-[position:center_40%]"}
            ${
              hoverIndex !== null
                ? "bg-[size:100vmax] opacity-10"
                : "bg-[size:110vmax] opacity-15"
            }
          `}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedMenu;
