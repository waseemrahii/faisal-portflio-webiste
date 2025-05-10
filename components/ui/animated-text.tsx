"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string | ReactNode
  className?: string
  once?: boolean
  delay?: number
  duration?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  animation?: "fade" | "slide" | "typewriter" | "word-by-word" | "letter-by-letter"
}

export function AnimatedText({
  text,
  className,
  once = true,
  delay = 0,
  duration = 0.5,
  as: Component = "div",
  animation = "word-by-word",
}: AnimatedTextProps) {
  // If text is a React node, just wrap it in a motion component
  if (typeof text !== "string") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once }}
        transition={{ duration, delay }}
      >
        {text}
      </motion.div>
    )
  }

  // Word by word animation
  if (animation === "word-by-word") {
    const words = text.split(" ")

    return (
      <Component className={cn("flex flex-wrap", className)}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-[0.25em] inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once }}
            transition={{ duration: duration * 0.75, delay: delay + index * 0.05 }}
          >
            {word}
          </motion.span>
        ))}
      </Component>
    )
  }

  // Letter by letter animation
  if (animation === "letter-by-letter") {
    return (
      <Component className={className}>
        {Array.from(text).map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once }}
            transition={{ duration: duration * 0.5, delay: delay + index * 0.03 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </Component>
    )
  }

  // Typewriter animation
  if (animation === "typewriter") {
    return (
      <Component className={className}>
        <motion.span
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once }}
          transition={{ duration: duration * 2, delay, ease: "easeInOut" }}
          className="inline-block whitespace-nowrap overflow-hidden"
        >
          {text}
        </motion.span>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
        />
      </Component>
    )
  }

  // Fade animation
  if (animation === "fade") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once }}
        transition={{ duration, delay }}
      >
        <Component>{text}</Component>
      </motion.div>
    )
  }

  // Slide animation (default)
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay }}
    >
      <Component>{text}</Component>
    </motion.div>
  )
}
