"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Senior Frontend Developer with extensive experience in building modern web applications
              that deliver exceptional user experiences. My goal is to create intuitive, responsive, and high-performing
              interfaces that solve real-world problems.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-200">5+ years of experience in web development</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-200">Specialized in MERN stack development</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-200">
                  Expertise in building scalable web applications
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-200">Committed to clean, maintainable code</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px]"
          >
            <Image
              src="/images/faisal-profile.png"
              alt="Muhammad Faisal Profile"
              fill
              className="object-cover object-top rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
