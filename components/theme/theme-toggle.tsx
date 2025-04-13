// components/theme/theme-toggle.tsx
"use client";

import React from "react";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`absolute top-4 right-4 z-50 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-white/70" />
      ) : (
        <Moon size={20} className="text-white/70" />
      )}
    </motion.button>
  );
}
