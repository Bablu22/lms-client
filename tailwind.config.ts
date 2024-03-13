import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#1C1E53",
        background: "#282938",
        accent: "#FCD980",
      },
    },
  },
  plugins: [],
};
export default config;
