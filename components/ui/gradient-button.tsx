"use client"

import type React from "react"

import { motion } from "framer-motion"
import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  glowEffect?: boolean
  href?: string
  external?: boolean
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      icon,
      iconPosition = "left",
      glowEffect = true,
      href,
      external,
      ...props
    },
    ref,
  ) => {
    // Define variant styles
    const variantStyles = {
      primary:
        "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white",
      secondary:
        "bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white",
      accent: "bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white",
      outline:
        "bg-transparent hover:bg-primary-500/10 border border-primary-500 text-primary-500 hover:text-primary-600",
      ghost: "bg-transparent hover:bg-primary-500/10 text-primary-500 hover:text-primary-600",
    }

    // Define size styles
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-md",
      md: "text-sm px-4 py-2 rounded-lg",
      lg: "text-base px-5 py-2.5 rounded-lg",
      xl: "text-lg px-6 py-3 rounded-xl",
    }

    // Define glow effect
    const glowStyles = glowEffect
      ? "shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-primary-500/20"
      : ""

    // Common styles for both button and link
    const commonStyles = cn(
      "font-medium relative inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2",
      variantStyles[variant],
      sizeStyles[size],
      glowStyles,
      fullWidth && "w-full",
      className,
    )

    // Content with icon
    const content = (
      <>
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </>
    )

    // If href is provided, render as Link
    if (href) {
      return external ? (
        <motion.a
          href={href}
          className={commonStyles}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.98 }}
          {...(props as any)}
        >
          {content}
        </motion.a>
      ) : (
        <Link href={href} passHref>
          <motion.a className={commonStyles} whileTap={{ scale: 0.98 }} {...(props as any)}>
            {content}
          </motion.a>
        </Link>
      )
    }

    // Otherwise render as button
    return (
      <motion.button ref={ref} className={commonStyles} whileTap={{ scale: 0.98 }} {...props}>
        {content}
      </motion.button>
    )
  },
)

GradientButton.displayName = "GradientButton"
