"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  depth?: number
  glare?: boolean
  shadow?: boolean
  borderRadius?: string
}

export function ThreeDCard({
  children,
  className,
  depth = 10,
  glare = true,
  shadow = true,
  borderRadius = "rounded-xl",
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Motion values for rotation
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  // Motion values for glare effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for better animation
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 })
  const springMouseX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springMouseY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  // Transform for the glare effect
  const glareOpacity = useTransform(springMouseX, [0, 300], [0, 0.3])
  const glareX = useTransform(springMouseX, [0, 300], ["0%", "100%"])
  const glareY = useTransform(springMouseY, [0, 300], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)

    // Update motion values
    rotateX.set(-percentY * depth) // Invert Y for natural tilt
    rotateY.set(percentX * depth)
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        `relative overflow-hidden ${borderRadius} bg-white dark:bg-gray-800 p-6 transition-colors`,
        shadow && "shadow-xl hover:shadow-2xl",
        className,
      )}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: depth }}
    >
      {/* Main content with 3D effect */}
      <motion.div style={{ transform: "translateZ(20px)" }}>{children}</motion.div>

      {/* Glare effect */}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white to-transparent"
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)`,
          }}
        />
      )}
    </motion.div>
  )
}
