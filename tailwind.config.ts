import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        background: "#f5f6fb"
      },
      boxShadow: {
        "soft-card":
          "0 12px 60px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(148, 163, 184, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

