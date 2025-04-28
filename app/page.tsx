"use client";

import { motion } from "framer-motion";
import CopyrightWatermark from "@/components/copyright-watermark";
import Home from "@/components/home";
import NavMenu from "@/components/navigation/nav-menu";

export default function Page() {
  return (
    <motion.main
      className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {/* <PageLoader /> */}
      <NavMenu />
      <Home />
      <CopyrightWatermark />
    </motion.main>
  );
}
