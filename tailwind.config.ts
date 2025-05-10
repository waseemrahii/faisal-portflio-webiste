/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        display: ["var(--font-clash-display)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "hsl(210, 100%, 95%)",
          100: "hsl(210, 100%, 90%)",
          200: "hsl(210, 100%, 80%)",
          300: "hsl(210, 100%, 70%)",
          400: "hsl(210, 100%, 60%)",
          500: "hsl(var(--primary))",
          600: "hsl(210, 100%, 45%)",
          700: "hsl(210, 100%, 40%)",
          800: "hsl(210, 100%, 35%)",
          900: "hsl(210, 100%, 30%)",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "hsl(199, 100%, 95%)",
          100: "hsl(199, 100%, 90%)",
          200: "hsl(199, 100%, 80%)",
          300: "hsl(199, 100%, 70%)",
          400: "hsl(199, 100%, 65%)",
          500: "hsl(var(--secondary))",
          600: "hsl(199, 100%, 55%)",
          700: "hsl(199, 100%, 45%)",
          800: "hsl(199, 100%, 40%)",
          900: "hsl(199, 100%, 35%)",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          50: "hsl(328, 100%, 95%)",
          100: "hsl(328, 100%, 90%)",
          200: "hsl(328, 100%, 80%)",
          300: "hsl(328, 100%, 70%)",
          400: "hsl(328, 100%, 65%)",
          500: "hsl(var(--accent))",
          600: "hsl(328, 100%, 55%)",
          700: "hsl(328, 100%, 45%)",
          800: "hsl(328, 100%, 40%)",
          900: "hsl(328, 100%, 35%)",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        grid: "url('/grid.svg')",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-delay": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float-delay 8s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        neon: "0 0 5px rgba(0, 149, 255, 0.5), 0 0 20px rgba(0, 149, 255, 0.3)",
        subtle: "0 2px 15px rgba(0, 0, 0, 0.05)",
        floating: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
