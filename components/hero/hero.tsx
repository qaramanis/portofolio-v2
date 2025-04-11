import { motion } from "framer-motion";
import Squares from "@/components/squares-background";
import OsmoVerticalNavigation from "../osmo-navigation";
import NavigationHint from "../navigation-hint";
import { useEffect, useState } from "react";

export default function Hero() {
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

  return (
    <div className="w-full h-full relative flex md:items-center py-8 overflow-hidden">
      <div className="relative z-10 text-left p-8 ml-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.8 }}
        >
          Apostolos Karamanis
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          admire simplicity
        </motion.h2>
      </div>
      <div className="absolute inset-0 z-0">
        <Squares
          speed={isMobile ? 0.2 : 0.4}
          squareSize={30}
          direction="diagonal"
          borderColor="#034C53"
          hoverFillColor="#222"
        />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1/2 z-0 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <OsmoVerticalNavigation />
      <NavigationHint />
    </div>
  );
}
