import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#080808",
          2: "#0f0f0f",
          3: "#161616",
          4: "#1e1e1e",
        },
        border: {
          DEFAULT: "#252525",
          2: "#2e2e2e",
        },
        text: {
          1: "#e8e8e2",
          2: "#a0a09a",
          3: "#5a5a54",
        },
        accent: {
          DEFAULT: "#d4f564",
          dim: "#8fa83a",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
