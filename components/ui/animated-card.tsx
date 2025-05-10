"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { type MouseEvent, type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverEffect?: "tilt" | "glow" | "scale" | "border" | "none"
  onClick?: () => void
}

export function AnimatedCard({ children, className, delay = 0, hoverEffect = "glow", onClick }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // For tilt effect
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  // For glow effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth values for better animation
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 })
  const springMouseX = useSpring(mouseX, { stiffness: 500, damping: 150 })
  const springMouseY = useSpring(mouseY, { stiffness: 500, damping: 150 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center (in percentage)
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)

    // Update motion values
    rotateX.set(-percentY * 5) // Invert Y for natural tilt
    rotateY.set(percentX * 5)
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    mouseX.set(0)
    mouseY.set(0)
  }

  // Create a radial gradient that follows the mouse
  const background = useMotionTemplate`radial-gradient(
    250px circle at ${springMouseX}px ${springMouseY}px,
    rgba(var(--primary-rgb), 0.1),
    transparent 80%
  )`

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl bg-card border p-6 shadow-md transition-colors",
        hoverEffect === "border" && "hover:border-primary/50",
        hoverEffect === "scale" && "hover:scale-[1.02]",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.8,
        delay,
        bounce: 0.3,
      }}
      style={
        hoverEffect === "tilt"
          ? {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      whileHover={hoverEffect === "scale" ? { scale: 1.02, transition: { duration: 0.3 } } : undefined}
      onMouseMove={hoverEffect !== "none" ? handleMouseMove : undefined}
      onMouseLeave={hoverEffect !== "none" ? handleMouseLeave : undefined}
      onClick={onClick}
    >
      {hoverEffect === "glow" && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background }}
          aria-hidden="true"
        />
      )}
      {children}
    </motion.div>
  )
}
