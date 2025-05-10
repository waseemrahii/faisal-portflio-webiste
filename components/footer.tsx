"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { GlassmorphismCard } from "./ui/glassmorphism-card"
import { TextGradient } from "./ui/text-gradient"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassmorphismCard>
              <TextGradient className="text-xl font-semibold mb-4">Muhammad Faisal</TextGradient>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Senior Frontend Developer specializing in building exceptional web applications with React, Next.js, and
                modern frontend technologies.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/muhammad-faisal-01252a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/faisalkhan01122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://wa.me/923347534934"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.5 17.5 C 14.5 17.5, 14.5 17.5, 14.5 17.5 Q 18 16, 19.5 13 A 9.5 9.5 0 0 0 20 10.5 A 9.5 9.5 0 0 0 10.5 1 A 9.5 9.5 0 0 0 1 10.5 A 9.5 9.5 0 0 0 3.5 17 L 2 22 L 7 20.5 A 9.5 9.5 0 0 0 10.5 21.5 A 9.5 9.5 0 0 0 20 12" />
                  </svg>
                </motion.a>
              </div>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassmorphismCard>
              <TextGradient className="text-xl font-semibold mb-4">Quick Links</TextGradient>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors animated-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassmorphismCard>
              <TextGradient className="text-xl font-semibold mb-4">Services</TextGradient>
              <ul className="space-y-2">
                {[
                  "React Development",
                  "Next.js Applications",
                  "Responsive Web Design",
                  "UI/UX Implementation",
                  "Performance Optimization",
                  "Frontend Architecture",
                ].map((service, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassmorphismCard>
              <TextGradient className="text-xl font-semibold mb-4">Contact</TextGradient>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                  <span>Islamabad, Pakistan</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                  <Phone size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                  <span>(+92) 3347534934</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                  <Mail size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                  <span>faisalkh01122@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-500 flex-shrink-0 mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.5 17.5 C 14.5 17.5, 14.5 17.5, 14.5 17.5 Q 18 16, 19.5 13 A 9.5 9.5 0 0 0 20 10.5 A 9.5 9.5 0 0 0 10.5 1 A 9.5 9.5 0 0 0 1 10.5 A 9.5 9.5 0 0 0 3.5 17 L 2 22 L 7 20.5 A 9.5 9.5 0 0 0 10.5 21.5 A 9.5 9.5 0 0 0 20 12" />
                  </svg>
                  <a href="https://wa.me/923347534934" className="hover:text-primary-500 transition-colors">
                    WhatsApp Me
                  </a>
                </li>
              </ul>
            </GlassmorphismCard>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            &copy; {currentYear} Muhammad Faisal. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
