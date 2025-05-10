"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { TextGradient } from "@/components/ui/text-gradient"
import { GradientButton } from "@/components/ui/gradient-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Modern particle background */}
      <ParticleBackground count={250} color="#0095ff" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <TextGradient
                    from="from-primary-500"
                    to="to-secondary-500"
                    animate
                    className="font-extrabold tracking-tight"
                  >
                    Frontend
                  </TextGradient>{" "}
                  <br />
                  <span className="inline-block mt-2">
                    <TextGradient
                      from="from-secondary-500"
                      to="to-accent-500"
                      animate
                      direction="right-to-left"
                      className="font-extrabold tracking-tight"
                    >
                      Developer
                    </TextGradient>
                  </span>
                </h1>
              </motion.div>

              <motion.p
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Crafting exceptional digital experiences with React, Next.js, and modern frontend technologies.
                Transforming ideas into beautiful, responsive web applications.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <GradientButton
                  href="/portfolio"
                  size="lg"
                  variant="primary"
                  icon={<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  iconPosition="right"
                >
                  View My Work
                </GradientButton>

                <GradientButton
                  href="https://wa.me/923347534934"
                  external
                  size="lg"
                  variant="outline"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      <path d="M14.5 17.5 C 14.5 17.5, 14.5 17.5, 14.5 17.5 Q 18 16, 19.5 13 A 9.5 9.5 0 0 0 20 10.5 A 9.5 9.5 0 0 0 10.5 1 A 9.5 9.5 0 0 0 1 10.5 A 9.5 9.5 0 0 0 3.5 17 L 2 22 L 7 20.5 A 9.5 9.5 0 0 0 10.5 21.5 A 9.5 9.5 0 0 0 20 12" />
                    </svg>
                  }
                >
                  WhatsApp Me
                </GradientButton>
              </motion.div>

              {/* Tech stack badges */}
              <motion.div
                className="flex flex-wrap gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {["React", "Next.js", "JavaScript","Api Integration", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
              {/* Decorative elements */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <GlassmorphismCard className="absolute inset-0 rounded-full overflow-hidden border-0 p-0">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/faisal-profile.png"
                    alt="Muhammad Faisal - Frontend Developer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </GlassmorphismCard>

              {/* Floating tech icons */}
              {[
                { icon: "⚛️", top: "10%", left: "-10%", delay: 0 },
                { icon: "🔷", top: "70%", left: "-5%", delay: 0.2 },
                { icon: "💻", top: "20%", right: "-10%", delay: 0.4 },
                { icon: "🚀", bottom: "10%", right: "-5%", delay: 0.6 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl"
                  style={{
                    top: item.top || "auto",
                    left: item.left || "auto",
                    right: item.right || "auto",
                    bottom: item.bottom || "auto",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + item.delay, duration: 0.5 }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: item.delay,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div className="w-1 h-2 bg-primary-500 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
