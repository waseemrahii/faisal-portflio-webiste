"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  borderGradient?: boolean
}

export function GlassmorphismCard({
  children,
  className,
  hoverEffect = true,
  borderGradient = true,
}: GlassmorphismCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl overflow-hidden backdrop-blur-lg bg-white/10 dark:bg-black/10 p-6 shadow-glass",
        borderGradient && "border border-white/20 dark:border-white/10",
        hoverEffect && "hover:shadow-xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {borderGradient && (
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>
      )}
      {children}
    </motion.div>
  )
}
