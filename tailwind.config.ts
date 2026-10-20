import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        campaign: {
          green: {
            50: "#f2f9f4",
            100: "#e1f2e7",
            200: "#c4e5d0",
            500: "#1e8750",
            600: "#166d3f",
            700: "#125633",
            800: "#0f4429",
            900: "#0b3520",
            950: "#051f12",
          },
          saffron: {
            50: "#fff9eb",
            100: "#feefc7",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
          },
          red: {
            50: "#fef2f2",
            100: "#fee2e2",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
          },
          cream: {
            50: "#ffffff",
            100: "#fdfcf9",
            200: "#f9f6ef",
            300: "#f3ede0",
            400: "#e8dfcc",
          },
          charcoal: {
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-devanagari)", "system-ui", "sans-serif"],
        devanagari: ["var(--font-noto-devanagari)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        warm: "0 4px 20px -2px rgba(15, 68, 41, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        "warm-lg": "0 10px 30px -4px rgba(15, 68, 41, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)",
        badge: "0 2px 10px rgba(185, 28, 28, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
