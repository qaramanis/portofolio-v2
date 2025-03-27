"use client";

import PageLoader from "@/components/loader/page-loader";
import { motion } from "framer-motion";
import OsmoNavigation from "@/components/hero/osmo-navigation";
import CopyrightWatermark from "@/components/copyright-watermark";
import Home from "@/components/home";

export default function Page() {
  return (
    <motion.main
      className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <PageLoader />
      <Home />
      <CopyrightWatermark />
    </motion.main>
  );
}
