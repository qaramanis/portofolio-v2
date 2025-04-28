// ExperienceMenu.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Globe, Folders, Database, Smartphone, FileCode2 } from "lucide-react";
import { ExperienceDetail } from "./experience-details";
import BackgroundImage from "./background-image";
import MenuItem from "./menu-item";

const ExperienceMenu: React.FC = () => {
  const router = useRouter();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
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
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
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
              <MenuItem
                item={item}
                index={index}
                hoverIndex={hoverIndex}
                iconSize={iconSize}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleItemClick(item.url)}
              />
            </motion.div>
          ))}
        </div>

        {/* <AnimatePresence>
          <ExperienceDetailBox
            isVisible={hoverIndex !== null}
            data={currentExperienceData}
          />
        </AnimatePresence> */}

        <BackgroundImage hoverIndex={hoverIndex} />
      </div>
    </div>
  );
};

export default ExperienceMenu;
