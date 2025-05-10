"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealOnScrollProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  className?: string
}

export function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 50,
  once = true,
  className,
}: RevealOnScrollProps) {
  // Set initial animation properties based on direction
  const getInitialProps = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance }
      case "down":
        return { opacity: 0, y: -distance }
      case "left":
        return { opacity: 0, x: distance }
      case "right":
        return { opacity: 0, x: -distance }
      default:
        return { opacity: 0, y: distance }
    }
  }

  // Set animation properties
  const getAnimateProps = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialProps()}
      whileInView={getAnimateProps()}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Improved easing function
      }}
    >
      {children}
    </motion.div>
  )
}
