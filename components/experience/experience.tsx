"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Globe, Folders, Database, Smartphone, FileCode2 } from "lucide-react";
import ExperienceDetailBox, { ExperienceDetail } from "./experience-details";
import { experienceData } from "./experience-data";

const ExperienceMenu: React.FC = () => {
  const router = useRouter();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentExperienceData, setCurrentExperienceData] =
    useState<ExperienceDetail | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const iconSize = isMobile ? 24 : 32;

  const menuItems = [
    {
      name: "Web Development",
      url: "/web-development",
      icon: <Globe size={iconSize} />,
      dataKey: "webDevelopment",
    },
    {
      name: "Project Management",
      url: "/project-management",
      icon: <Folders size={iconSize} />,
      dataKey: "projectManagement",
    },
    {
      name: "Data Analysis",
      url: "/data-analysis",
      icon: <Database size={iconSize} />,
      dataKey: "dataAnalysis",
    },
    {
      name: "Android Applications",
      url: "/android-apps",
      icon: <Smartphone size={iconSize} />,
      dataKey: "androidApps",
    },
    {
      name: "API Development",
      url: "/api-development",
      icon: <FileCode2 size={iconSize} />,
      dataKey: "apiDevelopment",
    },
  ];

  const handleItemClick = (url: string) => {
    router.push(url);
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);

    const dataKey = menuItems[index].dataKey as keyof typeof experienceData;
    setCurrentExperienceData(experienceData[dataKey]);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setCurrentExperienceData(null);
  };

  return (
    <div className="bg-[#141414] h-full w-full relative overflow-hidden">
      <div id="menu" className="flex items-center h-full w-full relative">
        <div
          id="menu-items"
          className="ml-[clamp(4rem,10vw,48rem)] relative z-10"
          data-active-index={hoverIndex !== null ? hoverIndex : undefined}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
                if (index === 0) ref.current = el;
              }}
              initial={{ opacity: 0, x: -150 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }
              }
              transition={{ delay: 0.1 * index, duration: 0.8 }}
            >
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
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleItemClick(item.url)}
              >
                <div className="flex items-center md:my-0 my-5">
                  <span className="mr-4 md:mr-8 text-[clamp(0.8rem,3vw,1.5rem)] opacity-70 ">
                    {item.icon}
                  </span>
                  {item.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          <ExperienceDetailBox
            isVisible={hoverIndex !== null}
            data={currentExperienceData}
          />
        </AnimatePresence>

        <div
          id="menu-background-image"
          className={`
            bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop&ixlib')]
            h-full w-full left-0 top-0 absolute
            bg-center bg-cover opacity-30
            transition-[opacity,background-size,background-position] duration-800 ease-in-out z-0
            ${hoverIndex === 0 ? "md:bg-[position:center_30%]" : ""}
            ${hoverIndex === 1 ? "md:bg-[position:center_40%]" : ""}
            ${hoverIndex === 2 ? "md:bg-[position:center_50%]" : ""}
            ${hoverIndex === 3 ? "md:bg-[position:center_60%]" : ""}
            ${hoverIndex === 4 ? "md:bg-[position:center_70%]" : ""}
            ${hoverIndex === 5 ? "md:bg-[position:center_80%]" : ""}
            ${hoverIndex !== null ? "" : "bg-[position:center_55%]"}
            ${
              hoverIndex !== null
                ? "md:bg-[size:100vmax] md:opacity-15"
                : "md:bg-[size:115vmax] md:opacity-40"
            }
          `}
        ></div>
      </div>
    </div>
  );
};

export default ExperienceMenu;
