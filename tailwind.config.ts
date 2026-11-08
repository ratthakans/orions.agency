import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Monochrome signal, with opacity modifiers for rules and focus states.
        signal: "hsl(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        // Real, self-hosted system — no Inter (was a phantom fallback).
        display: ["Unbounded", "IBM Plex Sans Thai", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans Thai", "system-ui", "sans-serif"],
        serif: ["Newsreader", "IBM Plex Sans Thai", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
        thai: ["IBM Plex Sans Thai", "system-ui", "sans-serif"],
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
    },
  },
} satisfies Config;
