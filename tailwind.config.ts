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
        accent: "#ff4d6d",
        primaryWhite: "#fafafa",
        mainBackground: "#ffccd5",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },

      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
