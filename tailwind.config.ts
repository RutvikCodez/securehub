import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-accent-1": "linear-gradient(to right, #FFC5C5, #FFB6C1)",
        "gradient-accent-2": "linear-gradient(to right, #FFB6C1, #FFC5C5)",
        "gradient-accent-3":
          "linear-gradient(120deg, #4B2999 0%, #57EEF1 100%);",
        "gradient-accent-4":
          "linear-gradient(60deg, #4B2999 0%, #57EEF1 100%);",
      },
      backgroundColor: {
        "accent-1": "#0e1625",
        "accent-2": "#57EEF1",
      },
      borderColor: {
        "accent-1": "rgba(236, 236, 248, 0.15)",
      },
      textColor: {
        "1": "#57EEF1",
        "2": "#a2abbd",
        "3": "#4b2999",
        "4": "#1f1f1f",
      },
      fontSize: {
        "accent-1": "20px",
        "accent-2": "16px",
        "accent-3": "54px",
        "accent-4": "34px",
        "accent-5": "14px",
      },
      lineHeight: {
        "accent-1": "1.1em",
        "accent-2": "22px",
        "accent-3": "1.5em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "accent-1": "8px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
