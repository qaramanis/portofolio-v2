"use client";
import React, { useEffect, useState } from "react";

interface CatchMeIfYouCanProps {
  delay?: number;
}

const CatchMeIfYouCan: React.FC<CatchMeIfYouCanProps> = ({ delay = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  text-gray-800 dark:text-white transition-colors duration-300">
      <svg
        className="m-auto block w-64 h-auto"
        viewBox="0 0 48 48"
        role="img"
        aria-label="A dot attempts to catch up to one on the right by moving like a Slinky, but it keeps inching away"
      >
        <defs>
          <linearGradient id="pl-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <mask id="pl-mask">
            <rect x="-1" y="-1" width="50" height="18" fill="url(#pl-grad)" />
          </mask>
        </defs>
        <g
          fill="none"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(0,19)"
        >
          <g className="animate-scene-move">
            <path
              className="stroke-[hsl(223,90%,50%)] animate-curve-offset"
              d="M 16 9 C 16 4.582 19.582 1 24 1 C 28.418 1 32 4.582 32 9"
              strokeDasharray="25.13 25.13"
              strokeDashoffset="25.12"
            />
            <polyline
              className="stroke-[hsl(343,90%,50%)] animate-dot-move"
              points="32 9,48 9"
              strokeDasharray="0.01 16"
            />
          </g>
          {/* <g mask="url(#pl-mask)">
            <g className="animate-scene-move">
              <path
                className="stroke-[hsl(163,90%,50%)] animate-curve-offset"
                d="M 16 9 C 16 4.582 19.582 1 24 1 C 28.418 1 32 4.582 32 9"
                strokeDasharray="25.13 25.13"
                strokeDashoffset="25.12"
              />
              <polyline
                className="stroke-[hsl(283,90%,50%)] animate-dot-move"
                points="32 9,48 9"
                strokeDasharray="0.01 16"
              />
            </g>
          </g> */}
        </g>
      </svg>
    </div>
  );
};

export default CatchMeIfYouCan;
