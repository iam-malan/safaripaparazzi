import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Gold color palette
        gold: {
          DEFAULT: "#D4AF37",
          50: "#F9F4E3",
          100: "#F4E9C7",
          200: "#EDD990",
          300: "#E6C959",
          400: "#DFB922",
          500: "#D4AF37",
          600: "#B8860B",
          700: "#8B6508",
          800: "#5E4506",
          900: "#302303",
        },
        // Dark color palette
        dark: {
          DEFAULT: "#121212",
          50: "#2C2C2C",
          100: "#262626",
          200: "#202020",
          300: "#1A1A1A",
          400: "#141414",
          500: "#121212",
          600: "#0E0E0E",
          700: "#0A0A0A",
          800: "#060606",
          900: "#000000",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s ease-out",
        "slide-up": "slide-up 1s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #FFC125 50%, #B8860B 100%)",
        "dark-gradient": "linear-gradient(135deg, #121212 0%, #1A1A1A 50%, #0A0A0A 100%)",
      },
      boxShadow: {
        "gold-sm": "0 1px 2px 0 rgba(212, 175, 55, 0.05)",
        gold: "0 1px 3px 0 rgba(212, 175, 55, 0.1), 0 1px 2px 0 rgba(212, 175, 55, 0.06)",
        "gold-md": "0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -1px rgba(212, 175, 55, 0.06)",
        "gold-lg": "0 10px 15px -3px rgba(212, 175, 55, 0.1), 0 4px 6px -2px rgba(212, 175, 55, 0.05)",
        "gold-xl": "0 20px 25px -5px rgba(212, 175, 55, 0.1), 0 10px 10px -5px rgba(212, 175, 55, 0.04)",
        "gold-2xl": "0 25px 50px -12px rgba(212, 175, 55, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
