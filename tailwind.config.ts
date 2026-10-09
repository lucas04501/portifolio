import type { Config } from "tailwindcss";

// Tokens de design: ver docs/design.md. Os nomes das classes (bg, border, text-1..3, accent)
// foram mantidos; só os valores mudaram (grafite + azul-gelo). Contrastes validados (WCAG):
// text-1 e text-2 acima de 5.8:1 e text-3 acima de 4.6:1 sobre qualquer bg; accent acima de 6:1.
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
          DEFAULT: "#0B0D10",
          2: "#12151A",
          3: "#1A1E25",
          4: "#222831",
        },
        border: {
          DEFAULT: "#262C35",
          2: "#323A46",
        },
        text: {
          1: "#E8EAED",
          2: "#9AA3AF",
          3: "#8791A0",
        },
        accent: {
          DEFAULT: "#8DB4E8",
          hover: "#A9C8F0",
          dim: "#6F95CC",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-display)", "var(--font-dm-sans)", "sans-serif"],
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
