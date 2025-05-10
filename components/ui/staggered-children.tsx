"use client"

import React from "react"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggeredChildrenProps {
  children: ReactNode
  staggerAmount?: number
  delayStart?: number
  className?: string
  childClassName?: string
  animation?: "fade" | "slide" | "scale" | "custom"
  customVariants?: any
  once?: boolean
}

export function StaggeredChildren({
  children,
  staggerAmount = 0.1,
  delayStart = 0,
  className,
  childClassName,
  animation = "slide",
  customVariants,
  once = true,
}: StaggeredChildrenProps) {
  // Define animation variants
  const variants = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: staggerAmount,
          delayChildren: delayStart,
        },
      },
    },
    fade: {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
      },
    },
  }

  // Get the appropriate variant based on animation type
  const getVariant = () => {
    if (animation === "custom" && customVariants) {
      return customVariants
    }
    return variants[animation]
  }

  // Convert children to array to map over them
  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div
      className={className}
      variants={variants.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} className={childClassName} variants={getVariant()}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
