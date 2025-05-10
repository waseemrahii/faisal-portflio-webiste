"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { type MouseEvent, type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  borderColor?: string
  hoverScale?: number
}

export function HoverCard({
  children,
  className,
  glowColor = "rgba(var(--primary-rgb), 0.15)",
  borderColor = "rgba(var(--primary-rgb), 0.1)",
  hoverScale = 1.02,
}: HoverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // For glow effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth values for better animation
  const springMouseX = useSpring(mouseX, { stiffness: 500, damping: 150 })
  const springMouseY = useSpring(mouseY, { stiffness: 500, damping: 150 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  // Create a radial gradient that follows the mouse
  const background = useMotionTemplate`radial-gradient(
    250px circle at ${springMouseX}px ${springMouseY}px,
    ${glowColor},
    transparent 80%
  )`

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl bg-card border p-6 shadow-md transition-all duration-300 group",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      whileHover={{ scale: hoverScale, borderColor: borderColor }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  )
}

export const HoverCardTrigger = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>
}

export const HoverCardContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>
}
