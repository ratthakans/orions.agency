import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        "border-soft": "hsl(var(--border-soft))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))",
        },
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
        // Brand accent alias — full utility set (text/bg/border/ring + opacity)
        cinnabar: "hsl(var(--accent) / <alpha-value>)",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        // Real, self-hosted system — no Inter (was a phantom fallback).
        display: ["Newsreader", "Trirong", "IBM Plex Sans Thai", "Georgia", "serif"],
        body: ["IBM Plex Sans Thai", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Trirong", "IBM Plex Sans Thai", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
        thai: ["IBM Plex Sans Thai", "system-ui", "sans-serif"],
        brand: ["Unbounded", "system-ui", "sans-serif"],
        unbounded: ["Unbounded", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
      },
      // Flat, sharp system — no shadows anywhere (shadow-* utilities → none).
      boxShadow: {
        none: "none",
        sm: "none",
        DEFAULT: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
        inner: "none",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "aurora-1": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%":      { transform: "translate(8%, 6%) scale(1.15)" },
        },
        "aurora-2": {
          "0%, 100%": { transform: "translate(0,0) scale(1.1)" },
          "50%":      { transform: "translate(-10%, -8%) scale(0.95)" },
        },
        "aurora-3": {
          "0%, 100%": { transform: "translate(0,0) scale(0.9)" },
          "50%":      { transform: "translate(-6%, 10%) scale(1.2)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        "shimmer": "shimmer 8s linear infinite",
        "aurora-1": "aurora-1 18s ease-in-out infinite",
        "aurora-2": "aurora-2 22s ease-in-out infinite",
        "aurora-3": "aurora-3 26s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
