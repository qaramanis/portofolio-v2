import { motion, useInView } from "framer-motion";
import Squares from "@/components/squares-background";
import OsmoVerticalNavigation from "../osmo-navigation";
import NavigationHint from "../navigation-hint";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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
    <div
      ref={ref}
      className="w-full h-full relative flex md:items-center py-24 overflow-hidden"
    >
      <div className="relative z-10 text-left p-8 ml-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 "
          initial={{ opacity: 0, x: 150 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Apostolos Karamanis
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-white/70"
          initial={{ opacity: 0, x: -250 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 250 }}
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
        />
      </div>

      <OsmoVerticalNavigation />
      <NavigationHint />
    </div>
  );
}
