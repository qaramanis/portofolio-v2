"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Threads from "../threads";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="w-full h-full relative flex flex-col items-center overflow-hidden"
    >
      <motion.div
        className="w-full max-w-4xl text-center z-10 pt-20 px-8"
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

        <motion.p
          className="text-xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A Computer Science student trying to elevate his knowledge and skills,
          in order to adapt and conquer the tech trends
        </motion.p>
      </motion.div>

      <div className="flex-1 w-full z-10 px-8">
        {/* You can add additional content here if needed */}
      </div>

      {/* <motion.div
        className="absolute inset-0 z-0"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
          delay: 0.75,
          duration: 0.8,
        }}
      >
        <Threads
          color={[3, 76, 83]}
          amplitude={0.3}
          distance={0.1}
          enableMouseInteraction={false}
        />
      </motion.div> */}

      <Threads
        color={[3, 76, 83]}
        amplitude={0.3}
        distance={0.2}
        enableMouseInteraction={false}
      />
    </div>
  );
}
