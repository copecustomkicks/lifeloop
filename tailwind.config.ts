import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      colors: {
        purple: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        pink: {
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
        },
        brand: {
          bg: "#eceaf4",
          "bg-dark": "#13111e",
          surface: "#f4f2fa",
          "surface-dark": "#1e1b2e",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "gradient-x": "gradientX 4s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
        "gradient-brand-hover":
          "linear-gradient(135deg, #6d28d9 0%, #9333ea 100%)",
      },
      boxShadow: {
        "brand-sm": "0 2px 8px rgba(124,58,237,0.12)",
        "brand-md": "0 6px 24px rgba(124,58,237,0.18)",
        "brand-lg": "0 16px 56px rgba(124,58,237,0.22)",
        "brand-btn": "0 4px 14px rgba(124,58,237,0.38)",
      },
    },
  },
  plugins: [],
};

export default config;
