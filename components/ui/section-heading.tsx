"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string | ReactNode
  centered?: boolean
  className?: string
  subtitleClassName?: string
  titleClassName?: string
  decorative?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  subtitleClassName,
  titleClassName,
  decorative = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16 relative", centered && "text-center", className)}>
      {decorative && (
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl md:text-8xl font-bold text-primary/5 select-none hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title.toUpperCase()}
        </motion.div>
      )}

      <motion.h2
        className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary relative z-10", titleClassName)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={cn("text-lg text-muted-foreground max-w-2xl mx-auto", centered && "mx-auto", subtitleClassName)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
