"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Muhammad Faisal</h3>
            <p className="text-gray-400 mb-4">
              Senior Frontend Developer specializing in building exceptional web applications with React, Next.js, and
              modern frontend technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
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
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-wasim-557523224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/waseemrahii/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://wa.me/923347534934"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
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
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2">
              {[
                "MERN Stack Development",
                "Next.js Applications",
                "WordPress Development",
                "API Integration",
                "Database Design",
                "UI/UX Implementation",
              ].map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                <span>(+92) 3347534934</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail size={20} className="text-primary flex-shrink-0 mt-1" />
                <span>faisalkh01122@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
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
                  className="text-primary flex-shrink-0 mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14.5 17.5 C 14.5 17.5, 14.5 17.5, 14.5 17.5 Q 18 16, 19.5 13 A 9.5 9.5 0 0 0 20 10.5 A 9.5 9.5 0 0 0 10.5 1 A 9.5 9.5 0 0 0 1 10.5 A 9.5 9.5 0 0 0 3.5 17 L 2 22 L 7 20.5 A 9.5 9.5 0 0 0 10.5 21.5 A 9.5 9.5 0 0 0 20 12" />
                </svg>
                <a href="https://wa.me/923347534934" className="hover:text-primary transition-colors">
                  WhatsApp Me
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Muhammad Faisal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
