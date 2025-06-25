import type { Config } from "tailwindcss"

const config = {
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
        // Gruvbox color scheme
        gruvbox: {
          // Dark theme colors
          "bg-dark": "#282828",
          "fg-dark": "#ebdbb2",
          "bg0-dark": "#282828",
          "bg1-dark": "#3c3836",
          "bg2-dark": "#504945",
          "bg3-dark": "#665c54",
          "bg4-dark": "#7c6f64",
          "gray-dark": "#928374",
          "red-dark": "#fb4934",
          "green-dark": "#b8bb26",
          "yellow-dark": "#fabd2f",
          "blue-dark": "#83a598",
          "purple-dark": "#d3869b",
          "aqua-dark": "#8ec07c",
          "orange-dark": "#fe8019",

          // Light theme colors
          "bg-light": "#fbf1c7",
          "fg-light": "#3c3836",
          "bg0-light": "#fbf1c7",
          "bg0h-light": "#f9f5d7",
          "bg0s-light": "#f2e5bc",
          "bg1-light": "#ebdbb2",
          "bg2-light": "#d5c4a1",
          "bg3-light": "#bdae93",
          "bg4-light": "#a89984",
          "gray-light": "#928374",
          "red-light": "#cc241d",
          "green-light": "#98971a",
          "yellow-light": "#d79921",
          "blue-light": "#458588",
          "purple-light": "#b16286",
          "aqua-light": "#689d6a",
          "orange-light": "#d65d0e",

          // Dynamic colors that change based on theme
          bg: "var(--gruvbox-bg)",
          fg: "var(--gruvbox-fg)",
          bg0: "var(--gruvbox-bg0)",
          bg1: "var(--gruvbox-bg1)",
          bg2: "var(--gruvbox-bg2)",
          bg3: "var(--gruvbox-bg3)",
          bg4: "var(--gruvbox-bg4)",
          gray: "var(--gruvbox-gray)",
          red: "var(--gruvbox-red)",
          green: "var(--gruvbox-green)",
          yellow: "var(--gruvbox-yellow)",
          blue: "var(--gruvbox-blue)",
          purple: "var(--gruvbox-purple)",
          aqua: "var(--gruvbox-aqua)",
          orange: "var(--gruvbox-orange)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
