import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: { 300: "#fee440" },
        blue: { 400: "#00bbf9" },
        green: { 400: "#7ae582" },
      },
      scale: {
        "102": "1.02",
      },
      animation: {
        float: "upAndDown 4s ease-in infinite",
      },
      keyframes: {
        upAndDown: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(4px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      transitionProperty: {
        translate: "translateY, translateX",
      },
    },
  },
  plugins: [],
};
export default config;
