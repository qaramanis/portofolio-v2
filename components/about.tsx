"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Threads from "./threads";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-4xl text-center z-10 p-8">
        <motion.h1
          className="text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0, duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A Computer Science student trying to elevate his knowledge and skills,
          in order to adapt and conquer the tech trends
        </motion.p>
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: 0.3,
          duration: 0.8,
        }}
      >
        <Threads
          color={[3, 76, 83]}
          amplitude={0.3}
          distance={0.1}
          enableMouseInteraction={false}
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent to-black opacity-70 pointer-events-none"></div>
    </div>
  );
}
