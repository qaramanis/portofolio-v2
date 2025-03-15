"use client";

import React from "react";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function NavigationHint() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-[#333] hover:text-white absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex items-center gap-2">
        <ArrowUpCircle size={24} />
        <ArrowDownCircle size={24} />
      </div>
      <p className="text-sm font-mono">use arrows to navigate</p>
    </motion.div>
  );
}
