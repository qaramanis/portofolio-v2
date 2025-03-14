"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import CatchMeIfYouCan from "./catch-me-if-you-can";

interface PageLoaderProps {
  initialDelay?: number;
  transitionDuration?: number;
}

export default function PageLoader({
  initialDelay = 2000,
  transitionDuration = 900,
}: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
  }, [isLoading, transitionDuration]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      initial={{ opacity: 1 }}
      animate={{
        opacity: isLoading ? 1 : 0,
      }}
      transition={{
        duration: transitionDuration / 900,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: isLoading ? 1 : 2,
          opacity: isLoading ? 1 : 0,
        }}
        transition={{
          duration: transitionDuration / 900,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        <CatchMeIfYouCan />
      </motion.div>
    </motion.div>
  );
}
