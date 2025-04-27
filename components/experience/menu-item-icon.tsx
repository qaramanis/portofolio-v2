import React, { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "lucide-react";

interface MenuItemIconProps {
  icon: JSX.Element;
  isHovered: boolean;
  iconSize: number;
}

const MenuItemIcon: React.FC<MenuItemIconProps> = ({
  icon,
  isHovered,
  iconSize,
}) => {
  return (
    <span className="mr-4 md:mr-8 text-[clamp(0.8rem,3vw,1.5rem)] w-6 md:w-8 flex justify-center">
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.span
            key="arrow"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-blue-400"
          >
            <Link size={iconSize} />
          </motion.span>
        ) : (
          <motion.span
            key="icon"
            initial={{ opacity: 0.7, x: 5 }}
            animate={{ opacity: 0.7, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default MenuItemIcon;
