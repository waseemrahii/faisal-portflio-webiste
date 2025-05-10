"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
  as?: "section" | "div" | "main"
}

export function SectionContainer({
  children,
  className,
  id,
  fullWidth = false,
  as: Component = "section",
}: SectionContainerProps) {
  return (
    <Component id={id} className={cn("py-16 md:py-24 overflow-hidden", className)}>
      <div className={cn(fullWidth ? "w-full" : "container mx-auto px-4 md:px-6")}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </Component>
  )
}
