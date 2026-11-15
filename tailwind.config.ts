import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#faf8f4",
        ink: "#1c1917",
        muted: "#57534e",
        line: "#d6d0c6",
        accent: {
          DEFAULT: "#1d4e6b",
          soft: "#e8f0f5",
        },
        surface: "#fffefb",
      },
      maxWidth: {
        prose: "40rem",
        blog: "42rem",
        page: "90rem",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.55s ease-out both",
        "rise-delay": "rise 0.55s ease-out 0.1s both",
        "rise-delay-2": "rise 0.55s ease-out 0.2s both",
      },
    },
  },
  plugins: [],
};
export default config;
