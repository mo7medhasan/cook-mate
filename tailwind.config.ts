import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mont: ["var(--font-montserrat)"],
        Natasha: ["var(--font-Natashawalke)"],
        Petit: ["var(--font-PetitCochon)"],
      },
      colors:{
        primary:"#E36824",
        secondary:"#5B7C75",
        dark:"#363636",
        shade:"#FDEED9",
        black:"#1C1C1C"
      }
    },
  },
  plugins: [],
};
export default config;
