"use client"

import { motion } from "framer-motion"

export function MapSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find Us
        </motion.h2>
        <motion.div
          className="w-full h-96 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Our Office</h3>
            <p className="mb-2">123 Tech Street, Silicon Valley, CA 94000</p>
            <p className="mb-2">(+92) 3455998484</p>
            <p>wasimrahii98@gmail.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
