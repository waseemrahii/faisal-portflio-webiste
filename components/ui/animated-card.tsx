"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
}

export function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 0.8,
        delay,
        bounce: 0.3,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-card/50 to-card border p-8 backdrop-blur-sm"
    >
      {children}
    </motion.div>
  )
}
