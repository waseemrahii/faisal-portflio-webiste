"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedGradientBackgroundProps {
  className?: string
  intensity?: "light" | "medium" | "strong"
  colorMode?: "primary" | "secondary" | "accent" | "mixed"
}

export function AnimatedGradientBackground({
  className,
  intensity = "medium",
  colorMode = "primary",
}: AnimatedGradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Define color combinations based on colorMode
  const getColors = () => {
    switch (colorMode) {
      case "primary":
        return {
          color1: "from-primary-500/10 via-primary-400/5 to-transparent",
          color2: "from-transparent via-primary-500/5 to-primary-600/10",
        }
      case "secondary":
        return {
          color1: "from-secondary-500/10 via-secondary-400/5 to-transparent",
          color2: "from-transparent via-secondary-500/5 to-secondary-600/10",
        }
      case "accent":
        return {
          color1: "from-accent-500/10 via-accent-400/5 to-transparent",
          color2: "from-transparent via-accent-500/5 to-accent-600/10",
        }
      case "mixed":
        return {
          color1: "from-primary-500/10 via-secondary-400/5 to-transparent",
          color2: "from-transparent via-accent-500/5 to-primary-600/10",
        }
      default:
        return {
          color1: "from-primary-500/10 via-primary-400/5 to-transparent",
          color2: "from-transparent via-primary-500/5 to-primary-600/10",
        }
    }
  }

  // Define intensity levels
  const getIntensity = () => {
    switch (intensity) {
      case "light":
        return { opacity1: "opacity-30", opacity2: "opacity-20" }
      case "medium":
        return { opacity1: "opacity-50", opacity2: "opacity-40" }
      case "strong":
        return { opacity1: "opacity-70", opacity2: "opacity-60" }
      default:
        return { opacity1: "opacity-50", opacity2: "opacity-40" }
    }
  }

  const colors = getColors()
  const intensityLevels = getIntensity()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle the updates to improve performance
      if (Math.random() > 0.9) {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.color1} ${intensityLevels.opacity1}`}
        animate={{
          backgroundPosition: [
            `${0 + mousePosition.x * 20}% ${0 + mousePosition.y * 20}%`,
            `${100 - mousePosition.x * 20}% ${0 + mousePosition.y * 20}%`,
            `${100 - mousePosition.x * 20}% ${100 - mousePosition.y * 20}%`,
            `${0 + mousePosition.x * 20}% ${100 - mousePosition.y * 20}%`,
            `${0 + mousePosition.x * 20}% ${0 + mousePosition.y * 20}%`,
          ],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />

      <motion.div
        className={`absolute inset-0 bg-gradient-to-tr ${colors.color2} ${intensityLevels.opacity2}`}
        animate={{
          backgroundPosition: [
            `${100 - mousePosition.x * 20}% ${100 - mousePosition.y * 20}%`,
            `${0 + mousePosition.x * 20}% ${100 - mousePosition.y * 20}%`,
            `${0 + mousePosition.x * 20}% ${0 + mousePosition.y * 20}%`,
            `${100 - mousePosition.x * 20}% ${0 + mousePosition.y * 20}%`,
            `${100 - mousePosition.x * 20}% ${100 - mousePosition.y * 20}%`,
          ],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />

      {/* Add floating shapes for more visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full filter blur-3xl animate-float-delay" />
      <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-accent-500/5 rounded-full filter blur-3xl animate-float-slow" />

      {/* Add subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />
    </div>
  )
}
