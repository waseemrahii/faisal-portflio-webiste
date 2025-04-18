"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "React", icon: "/icons/react.svg", level: 95 },
  { name: "Next.js", icon: "/icons/nextjs.svg", level: 90 },
  { name: "JavaScript", icon: "/icons/javascript.svg", level: 95 },
  { name: "TypeScript", icon: "/icons/typescript.svg", level: 85 },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg", level: 90 },
  { name: "Redux", icon: "/icons/redux.svg", level: 85 },
  { name: "HTML5/CSS3", icon: "/icons/html5.svg", level: 95 },
  { name: "Framer Motion", icon: "/icons/framer.svg", level: 80 },
]

export function TechStackSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in modern frontend technologies including React, Next.js, and TypeScript to build beautiful,
            responsive, and high-performance web applications tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-4 relative">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {tech.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                </div>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${tech.level}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-500">Beginner</span>
                <span className="text-sm text-gray-500">Expert</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
