"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutNav from "./about-nav";

// import SplashCursor from "../cursor/splash-cursor";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="w-full h-full relative flex flex-col items-center overflow-hidden"
    >
      {/* <SplashCursor
        SIM_RESOLUTION={512}
        DYE_RESOLUTION={1024}
        DENSITY_DISSIPATION={5}
        VELOCITY_DISSIPATION={3}
        PRESSURE={0.1}
        PRESSURE_ITERATIONS={20}
        CURL={1.5}
        SPLAT_RADIUS={0.1}
        SPLAT_FORCE={50}
        SHADING={true}
        COLOR_UPDATE_SPEED={2}
        BACK_COLOR={{ r: 0.05, g: 0.05, b: 0.05 }}
        TRANSPARENT={true}
      /> */}

      <motion.div
        className="w-full max-w-4xl text-center z-10 pt-16 px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Me
        </motion.h1>

        {/* <motion.p
          className="text-xl text-white/80 mb-12 hidden md:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I am an ambitious Computer Science student that constantly works to elevate his knowledge and skills,
          in order to adapt and conquer the tech trends
        </motion.p> */}
        <AboutNav />
      </motion.div>
    </div>
  );
}
