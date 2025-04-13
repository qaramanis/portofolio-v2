"use client";
import React, { useEffect, useState } from "react";
import { ArrowUpCircle, ArrowDownCircle, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function NavigationHint() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center gap-2 text-[#333] hover:text-white absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 duration-500 select-none">
        <ArrowDown size={36} className="animate-bounce" />
        <p className="text-base font-mono">swipe down</p>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-[#333] hover:text-white hover:scale-105 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex items-center gap-2">
        <ArrowUpCircle size={28} />
        <ArrowDownCircle size={28} />
      </div>
      <p className="text-lg font-mono">use arrow keys to navigate</p>
    </motion.div>
  );
}
