"use client"

import { motion } from "framer-motion"
import { Lightbulb, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Innovative Solutions",
    description:
      "We leverage cutting-edge technologies to create unique and effective digital solutions for your business.",
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Rapid Development",
    description: "Our agile approach ensures quick turnaround times without compromising on quality or functionality.",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Robust Security",
    description: "We prioritize the security of your digital assets, implementing best practices to protect your data.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
