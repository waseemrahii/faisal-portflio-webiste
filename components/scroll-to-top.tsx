"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-2">
          <motion.a
            href="https://wa.me/923347534934"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14.5 17.5 C 14.5 17.5, 14.5 17.5, 14.5 17.5 Q 18 16, 19.5 13 A 9.5 9.5 0 0 0 20 10.5 A 9.5 9.5 0 0 0 10.5 1 A 9.5 9.5 0 0 0 1 10.5 A 9.5 9.5 0 0 0 3.5 17 L 2 22 L 7 20.5 A 9.5 9.5 0 0 0 10.5 21.5 A 9.5 9.5 0 0 0 20 12" />
            </svg>
          </motion.a>
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
