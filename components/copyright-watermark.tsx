"use client";
import React from "react";

interface CopyrightWatermarkProps {
  text?: string;
  year?: number;
  subtext?: string;
}

export default function CopyrightWatermark({
  text = "© Apostolos Karamanis",
  year = 2025,
  subtext = "All Rights Reserved",
}: CopyrightWatermarkProps) {
  return (
    <div className="fixed bottom-4 left-4 z-10 text-xs text-white/30 font-mono pointer-events-none select-none hidden md:flex flex-col">
      <div>
        {text} {year}
      </div>
      <p>{subtext}</p>
    </div>
  );
}
