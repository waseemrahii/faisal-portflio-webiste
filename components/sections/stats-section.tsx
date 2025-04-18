"use client"

import { motion } from "framer-motion"
import { Code, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    value: "50+",
    label: "Projects Completed",
    description: "Successfully delivered web applications and websites",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    value: "30+",
    label: "Happy Clients",
    description: "From startups to established businesses",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    value: "5+",
    label: "Years Experience",
    description: "In web development and design",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    value: "100%",
    label: "On-time Delivery",
    description: "Committed to meeting deadlines",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-lg font-medium text-gray-700 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
