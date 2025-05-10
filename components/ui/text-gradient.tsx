"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TextGradientProps {
  children: ReactNode
  className?: string
  from?: string
  to?: string
  animate?: boolean
  direction?: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top" | "diagonal"
}

export function TextGradient({
  children,
  className,
  from = "from-primary-500",
  to = "to-secondary-500",
  animate = false,
  direction = "left-to-right",
}: TextGradientProps) {
  // Define gradient direction
  const getGradientDirection = () => {
    switch (direction) {
      case "left-to-right":
        return "bg-gradient-to-r"
      case "right-to-left":
        return "bg-gradient-to-l"
      case "top-to-bottom":
        return "bg-gradient-to-b"
      case "bottom-to-top":
        return "bg-gradient-to-t"
      case "diagonal":
        return "bg-gradient-to-br"
      default:
        return "bg-gradient-to-r"
    }
  }

  const gradientDirection = getGradientDirection()

  if (animate) {
    return (
      <motion.span
        className={cn(`inline-block ${gradientDirection} ${from} ${to} text-transparent bg-clip-text`, className)}
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        style={{ backgroundSize: "200% auto" }}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <span className={cn(`inline-block ${gradientDirection} ${from} ${to} text-transparent bg-clip-text`, className)}>
      {children}
    </span>
  )
}
