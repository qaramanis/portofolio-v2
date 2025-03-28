"use client";

import React, { useEffect, useState } from "react";

interface CursorLightProps {
  color?: string;
  size?: number;
  opacity?: number;
  blur?: number;
}

const CursorLight: React.FC<CursorLightProps> = ({
  color = "rgba(255, 255, 255, 0.3)",
  size = 300,
  opacity = 0.5,
  blur = 80,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-10"
      style={{
        left: position.x,
        top: position.y,
        width: size + "px",
        height: size + "px",
        transform: "translate(-50%, -50%)",
        opacity: opacity,
        background: `radial-gradient(circle, ${color} 0%, rgba(0, 0, 0, 0) 70%)`,
        filter: `blur(${blur}px)`,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default CursorLight;
