"use client"

import { createContext, useContext, type ReactNode } from "react"

// Define our color palette and design tokens with a more modern aesthetic
export const designTokens = {
  colors: {
    primary: {
      50: "#e0f2ff",
      100: "#b8e0ff",
      200: "#8aceff",
      300: "#5cbbff",
      400: "#38a8ff",
      500: "#0095ff", // Main primary color - more vibrant blue
      600: "#0077e6",
      700: "#005bb3",
      800: "#004080",
      900: "#00254d",
    },
    secondary: {
      50: "#f0f7ff",
      100: "#e6f9ff",
      200: "#ccf3ff",
      300: "#99e6ff",
      400: "#66d9ff",
      500: "#33ccff", // Brighter secondary color
      600: "#00bfff",
      700: "#0099cc",
      800: "#007399",
      900: "#004d66",
    },
    accent: {
      50: "#fff0f7",
      100: "#ffe6f0",
      200: "#ffcce6",
      300: "#ff99cc",
      400: "#ff66b3",
      500: "#ff3399", // Vibrant pink accent
      600: "#ff0080",
      700: "#cc0066",
      800: "#99004d",
      900: "#660033",
    },
    success: "#00d97e", // Brighter success color
    warning: "#ffcc00", // Brighter warning color
    error: "#ff3b5c", // Modern error color
    info: "#0095ff", // Matching primary
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    dark: {
      100: "#121212",
      200: "#1e1e1e",
      300: "#2d2d2d",
      400: "#3c3c3c",
      500: "#4b4b4b",
    },
  },
  typography: {
    fontFamily: {
      sans: "'Poppins', sans-serif",
      mono: "'Roboto Mono', monospace",
      display: "'Clash Display', sans-serif",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
    // Modern shadows
    glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
    neon: "0 0 5px rgba(0, 149, 255, 0.5), 0 0 20px rgba(0, 149, 255, 0.3)",
    subtle: "0 2px 15px rgba(0, 0, 0, 0.05)",
    floating: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
  },
  animations: {
    durations: {
      fastest: "100ms",
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "700ms",
      slowest: "1000ms",
    },
    easings: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  effects: {
    glassmorphism: "backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.1);",
    neumorphism: "box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;",
  },
}

// Create a context to provide design tokens throughout the app
type DesignSystemContextType = {
  tokens: typeof designTokens
}

const DesignSystemContext = createContext<DesignSystemContextType>({
  tokens: designTokens,
})

export const DesignSystemProvider = ({ children }: { children: ReactNode }) => {
  return <DesignSystemContext.Provider value={{ tokens: designTokens }}>{children}</DesignSystemContext.Provider>
}

export const useDesignSystem = () => useContext(DesignSystemContext)
