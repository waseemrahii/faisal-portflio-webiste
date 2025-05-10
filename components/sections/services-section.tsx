"use client"

import { Code, Layout, Palette, Smartphone, Zap, Layers,  } from "lucide-react"
import { motion } from "framer-motion"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { TextGradient } from "@/components/ui/text-gradient"
import Link from "next/link"

const services = [
  {
    icon: <Code className="h-10 w-10 text-white" />,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Next.js, and modern JavaScript.",
    gradient: "from-primary-500 to-secondary-500",
  },
  {
    icon: <Layout className="h-10 w-10 text-white" />,
    title: "Responsive Web Design",
    description: "Creating websites that work flawlessly across all devices, from mobile phones to desktop computers.",
    gradient: "from-secondary-500 to-accent-500",
  },
  {
    icon: <Palette className="h-10 w-10 text-white" />,
    title: "UI/UX Implementation",
    description: "Transforming design mockups into pixel-perfect, functional interfaces with attention to detail.",
    gradient: "from-accent-500 to-primary-500",
  },
  {
    icon: <Zap className="h-10 w-10 text-white" />,
    title: "Performance Optimization",
    description: "Improving website speed and performance for better user experience and SEO rankings.",
    gradient: "from-primary-500 to-accent-500",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-white" />,
    title: "Mobile-First Development",
    description: "Developing applications with a mobile-first approach to ensure optimal experience on all devices.",
    gradient: "from-secondary-500 to-primary-500",
  },
  {
    icon: <Layers className="h-10 w-10 text-white" />,
    title: "Frontend Architecture",
    description: "Designing scalable frontend architectures with modern state management and component libraries.",
    gradient: "from-accent-500 to-secondary-500",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-500/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TextGradient from="from-primary-600" to="to-secondary-600" className="text-3xl md:text-4xl font-bold mb-4">
            My Services
          </TextGradient>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I provide comprehensive frontend development services to help bring your digital ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <GlassmorphismCard className="h-full">
                <div className="flex flex-col h-full">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">{service.description}</p>

                  import Link from "next/link";

<Link href="/portfolio">
  <motion.div
    className="mt-6 text-primary-500 font-medium flex items-center cursor-pointer"
    whileHover={{ x: 5 }}
  >
    Learn more
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </motion.div>
</Link>

                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
