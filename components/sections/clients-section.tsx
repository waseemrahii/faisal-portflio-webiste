"use client"

import { motion } from "framer-motion"

const clients = [
  {
    name: "TechSolutions Inc.",
    role: "E-commerce Platform",
    feedback:
      "Wasim delivered an exceptional e-commerce solution that exceeded our expectations. His technical expertise and attention to detail were impressive.",
  },
  {
    name: "HealthCare Connect",
    role: "Patient Portal",
    feedback:
      "Working with Wasim was a pleasure. He understood our complex requirements and delivered a secure, user-friendly patient management system.",
  },
  {
    name: "EduLearn Academy",
    role: "Learning Management System",
    feedback:
      "Wasim's work on our learning platform has transformed our business. The system is intuitive, scalable, and exactly what we needed.",
  },
  {
    name: "FinTech Innovations",
    role: "Financial Dashboard",
    feedback:
      "The dashboard Wasim created has given us powerful insights into our financial data. His work is clean, efficient, and highly professional.",
  },
  {
    name: "Creative Studios",
    role: "Portfolio Website",
    feedback:
      "Our new portfolio website has received countless compliments. Wasim's design sensibility and technical implementation were top-notch.",
  },
  {
    name: "Global Logistics",
    role: "Tracking System",
    feedback:
      "The tracking system Wasim developed has streamlined our operations and improved customer satisfaction. A truly valuable addition to our business.",
  },
]

export function ClientsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Success stories from businesses I've helped transform through technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-primary/5 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">{client.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold">{client.name}</h3>
                <p className="text-sm text-primary/80">{client.role}</p>
              </div>
              <p className="text-muted-foreground italic">"{client.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
