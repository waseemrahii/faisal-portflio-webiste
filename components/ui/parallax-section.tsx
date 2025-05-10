"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { type ReactNode, useRef } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({ children, className, speed = 0.2, direction = "up" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform based on direction
  const distance = 100 * speed // pixels to move
  const upTransform = useTransform(scrollYProgress, [0, 1], ["0%", `-${distance}px`])
  const downTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${distance}px`])
  const leftTransform = useTransform(scrollYProgress, [0, 1], ["0%", `-${distance}px`])
  const rightTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${distance}px`])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return upTransform
      case "down":
        return downTransform
      case "left":
        return leftTransform
      case "right":
        return rightTransform
      default:
        return upTransform
    }
  }

  const transform = getTransform()

  // Set the appropriate style property based on direction
  const style = () => {
    if (direction === "up" || direction === "down") {
      return { y: transform }
    }
    return { x: transform }
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={style()}>{children}</motion.div>
    </div>
  )
}
