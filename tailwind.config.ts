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
          DEFAULT: "#05070A",
          2: "#0A0D12",
          3: "#10141B",
          4: "#171C25",
        },
        border: {
          DEFAULT: "#1A202A",
          2: "#262E3A",
        },
        text: {
          1: "#E8EAED",
          2: "#9AA3AF",
          3: "#8791A0",
        },
        // Azul forte: so CTA principal e uma palavra por h2 (6.3:1 sobre bg; texto escuro por cima)
        hot: {
          DEFAULT: "#4F8CFF",
          hover: "#7AA8FF",
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
