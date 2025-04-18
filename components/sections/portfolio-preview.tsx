"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

// These are your actual projects with frontend focus
const projects = [
  {
    id: "lhd-pk",
    title: "LHD Pakistan",
    description: "Modern corporate website with responsive design and interactive elements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "https://lhd-pk.com/",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "Responsive e-commerce interface with product galleries, cart functionality, and checkout flow.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/ecommerce",
    tags: ["React", "Redux", "Styled Components"],
  },
  {
    id: "fintech-mobile-app",
    title: "FinTech Dashboard",
    description: "Financial dashboard with interactive charts, data visualization, and responsive design.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1770&auto=format&fit=crop",
    link: "https://example.com/fintech",
    tags: ["React", "Chart.js", "Tailwind CSS"],
  },
]

export function PortfolioPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent work that showcases my expertise in React, Next.js, and modern frontend
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium flex items-center hover:underline"
                    >
                      Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="text-blue-600 font-medium flex items-center hover:underline"
                >
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
