import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
        "curve-offset": "curve-offset 1s cubic-bezier(0.65,0,0.35,1) infinite",
        "dot-move": "dot-move 1s cubic-bezier(0.65,0,0.35,1) infinite",
        "scene-move": "scene-move 1s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "curve-offset": {
          from: { strokeDashoffset: "25.12" },
          "46%": { strokeDashoffset: "0" },
          "92%, to": { strokeDashoffset: "-24.97" },
        },
        "dot-move": {
          "from, 25%": { strokeDashoffset: "0" },
          "50%, to": { strokeDashoffset: "-15.99" },
        },
        "scene-move": {
          from: { transform: "translate(0,0)" },
          to: { transform: "translate(-16px,0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
