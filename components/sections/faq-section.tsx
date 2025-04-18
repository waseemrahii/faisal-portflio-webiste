"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js), Next.js for server-side rendering, and WordPress for content management systems. I also have experience with various frontend frameworks, database systems, and cloud platforms.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary based on complexity, scope, and requirements. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I provide detailed timelines during the planning phase after understanding your specific needs.",
  },
  {
    question: "Do you offer maintenance and support after project completion?",
    answer:
      "Yes, I offer ongoing maintenance and support packages to ensure your website or application continues to run smoothly. This includes regular updates, security patches, performance optimization, and technical support.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "I maintain regular communication through your preferred channels (email, Slack, WhatsApp, etc.) and provide weekly progress updates. For larger projects, I set up project management tools to track milestones and deliverables transparently.",
  },
  {
    question: "Can you work with existing codebases or only new projects?",
    answer:
      "I'm comfortable working with existing codebases, performing code audits, implementing new features, or refactoring for better performance. I can adapt to your current tech stack and development workflows.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "I offer flexible pricing options including project-based quotes, hourly rates, and retainer arrangements. Pricing depends on project complexity, timeline, and specific requirements. I provide detailed quotes after an initial consultation.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about my services, process, and expertise
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-primary/10 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-primary/5 hover:bg-primary/10 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 p-4" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
