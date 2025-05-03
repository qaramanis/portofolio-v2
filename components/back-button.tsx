"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackButton() {
  const router = useRouter();

  const handleNavigateBack = () => {
    router.push("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="default"
        className="bg-transparent group text-white hover:bg-blue-400/50 hover:scale-105 rounded-2xl"
        onClick={handleNavigateBack}
      >
        <ChevronLeft
          className="mr-2 transition-transform group-hover:-translate-x-1 text-white"
          size={18}
        />
        Back to main page
      </Button>
    </motion.div>
  );
}
