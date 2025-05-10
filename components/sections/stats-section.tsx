"use client"

import { motion, useInView } from "framer-motion"
import { Code, Users, Award, Clock } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { ThreeDCard } from "@/components/ui/3d-card"
import { TextGradient } from "@/components/ui/text-gradient"

const stats = [
  {
    icon: <Code className="h-8 w-8 text-primary-500" />,
    value: "10+",
    label: "Projects Completed",
    description: "Successfully delivered web applications and websites",
  },
  {
    icon: <Users className="h-8 w-8 text-primary-500" />,
    value: "10+",
    label: "Happy Clients",
    description: "From startups to established businesses",
  },
  {
    icon: <Award className="h-8 w-8 text-primary-500" />,
    value: "2+",
    label: "Years Experience",
    description: "In web development and design",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary-500" />,
    value: "100%",
    label: "On-time Delivery",
    description: "Committed to meeting deadlines",
  },
]

export function StatsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50 to-white dark:from-gray-900 dark:via-primary-900/10 dark:to-gray-900" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TextGradient from="from-primary-600" to="to-secondary-600" className="text-3xl md:text-4xl font-bold mb-4">
            My Impact by the Numbers
          </TextGradient>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Delivering exceptional results and maintaining high standards across all projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ThreeDCard key={index} depth={5} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full mb-6 shadow-lg">
                  {stat.icon}
                </div>

                <motion.h3
                  className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-gray-600 bg-clip-text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.5,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100,
                          },
                        }
                      : {}
                  }
                >
                  <CountUp value={stat.value} />
                </motion.h3>

                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{stat.label}</h4>
                <p className="text-gray-500 dark:text-gray-400">{stat.description}</p>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Simple counter animation component
function CountUp({ value }: { value: string }) {
  // If value is not a number with a + sign, just return it
  if (!value.endsWith("+") && isNaN(Number.parseInt(value))) {
    return <>{value}</>
  }

  // Extract the number part
  const numericValue = Number.parseInt(value)
  const hasPlusSign = value.endsWith("+")

  const [hasEnteredView, setHasEnteredView] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      setHasEnteredView(true)
    }
  }, [isInView])

  return (
    <span ref={ref}>
      {hasEnteredView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {numericValue}
          {hasPlusSign && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="absolute -right-4 top-0 text-accent-500"
            >
              +
            </motion.span>
          )}
        </motion.span>
      ) : (
        <span>0{hasPlusSign && "+"}</span>
      )}
    </span>
  )
}
