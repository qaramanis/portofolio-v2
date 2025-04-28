"use client";

import React from "react";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function WebDevOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col"
    >
      <div className="flex items-center gap-2 mb-4">
        <Globe className="text-blue-400 mr-4" size={32} />
        <h2 className="md:text-4xl font-semibold">Web Development</h2>
      </div>
      <p className="text-white/80 leading-relaxed">Description to be added</p>
    </motion.div>
  );
}
