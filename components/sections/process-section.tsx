"use client"

import { motion } from "framer-motion"
import { FileCode, Lightbulb, Rocket, Settings, Zap } from "lucide-react"

const steps = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Discovery",
    description: "Understanding your business goals, target audience, and project requirements.",
  },
  {
    icon: <FileCode className="h-10 w-10 text-primary" />,
    title: "Planning",
    description: "Creating a detailed roadmap with timelines, milestones, and technical specifications.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Development",
    description: "Building your solution with clean, efficient code and regular progress updates.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Testing",
    description: "Rigorous quality assurance to ensure functionality, performance, and security.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Launch",
    description: "Deploying your project and providing training and documentation for smooth operation.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">My Development Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to ensure your project is delivered on time, within budget, and exceeds expectations
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center md:items-start gap-8 md:gap-12`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center z-10 relative">
                    {step.icon}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-primary/20 animate-pulse"></div>
                  <div className="hidden md:block absolute top-1/2 w-12 h-1 bg-primary/20 left-full -translate-y-1/2"></div>
                  <div className="hidden md:block absolute top-1/2 w-12 h-1 bg-primary/20 right-full -translate-y-1/2"></div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
