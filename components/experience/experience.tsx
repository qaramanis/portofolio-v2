"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Separator } from "../ui/separator";

const ExperienceMenu: React.FC = () => {
  const router = useRouter();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  const menuItems = [
    { name: "Web Design", url: "/web-design" },
    { name: "Project Management", url: "/project-management" },
    { name: "Data Analysis", url: "/data-analysis" },
    { name: "Android Applications", url: "/android-apps" },
    { name: "API Development", url: "/api-development" },
  ];
  const handleItemClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className="bg-[#141414] h-full w-full relative overflow-hidden">
      <div id="menu" className="flex items-center h-full w-full relative">
        <div
          id="menu-items"
          className="ml-[clamp(4rem,20vw,48rem)] relative z-10"
          data-active-index={hoverIndex !== null ? hoverIndex : undefined}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: -150 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }
              }
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <div
                className={`
                menu-item text-white/80 cursor-pointer block
                text-[clamp(1rem,8vw,3rem)] py-[clamp(0.25rem,0.5vw,1rem)] pr-0 pl-0 
                no-underline transition-all duration-400 ease-in-out
                ${
                  hoverIndex !== null && hoverIndex !== index
                    ? "opacity-20 scale-95"
                    : "opacity-100 scale-100"
                }
                ${hoverIndex === index ? "text-white" : ""}
              `}
                onMouseOver={() => setHoverIndex(index)}
                onMouseOut={() => setHoverIndex(null)}
                onClick={() => handleItemClick(item.url)}
              >
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div
          id="menu-background-image"
          className={`
            md:bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop&ixlib')]
            bg-[url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            h-full w-full left-0 top-0 absolute
            transition-[opacity,background-size,background-position] duration-800 ease-in-out z-0
            ${hoverIndex === 0 ? "bg-[position:center_30%]" : ""}
            ${hoverIndex === 1 ? "bg-[position:center_40%]" : ""}
            ${hoverIndex === 2 ? "bg-[position:center_50%]" : ""}
            ${hoverIndex === 3 ? "bg-[position:center_60%]" : ""}
            ${hoverIndex === 4 ? "bg-[position:center_70%]" : ""}
            ${hoverIndex === 5 ? "bg-[position:center_80%]" : ""}
            ${hoverIndex !== null ? "" : "bg-[position:center_55%]"}
            ${
              hoverIndex !== null
                ? "bg-[size:100vmax] opacity-15"
                : "bg-[size:110vmax] opacity-30"
            }
          `}
        ></div>
      </div>
    </div>
  );
};

export default ExperienceMenu;

//https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
