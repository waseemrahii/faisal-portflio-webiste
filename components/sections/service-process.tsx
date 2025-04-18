"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const steps = [
  { title: "Consultation", description: "We discuss your needs and goals" },
  { title: "Planning", description: "We create a tailored strategy" },
  { title: "Execution", description: "We implement the solution" },
  { title: "Testing", description: "We ensure everything works perfectly" },
  { title: "Launch", description: "Your project goes live" },
  { title: "Support", description: "We provide ongoing assistance" },
]

export function ServiceProcess() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Service Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              {index < steps.length - 1 && <ArrowRight className="text-blue-500 mt-4 mx-auto" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
