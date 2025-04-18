"use client"

import { motion } from "framer-motion"
import { Code, Layout, Palette, Smartphone, Zap, Layers } from "lucide-react"

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Next.js, and modern JavaScript.",
  },
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "Responsive Web Design",
    description: "Creating websites that work flawlessly across all devices, from mobile phones to desktop computers.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Implementation",
    description: "Transforming design mockups into pixel-perfect, functional interfaces with attention to detail.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Performance Optimization",
    description: "Improving website speed and performance for better user experience and SEO rankings.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile-First Development",
    description: "Developing applications with a mobile-first approach to ensure optimal experience on all devices.",
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Frontend Architecture",
    description: "Designing scalable frontend architectures with modern state management and component libraries.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I provide comprehensive frontend development services to help bring your digital ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="mb-4 bg-secondary p-4 inline-block rounded-full">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
