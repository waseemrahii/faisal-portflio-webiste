"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Zap, Shield } from "lucide-react"

const values = [
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication to achieve great results.",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "Efficiency",
    description: "We strive to optimize our processes and deliver high-quality work in a timely manner.",
  },
  {
    icon: <Shield className="h-8 w-8 text-green-500" />,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical behavior in all our interactions.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
