"use client";

import CatchMeIfYouCan from "@/components/loader/catch-me-if-you-can";
import Home from "@/components/home";
import PageLoader from "@/components/loader/page-loader";
import { motion } from "framer-motion";

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
    </motion.main>
  );
}
