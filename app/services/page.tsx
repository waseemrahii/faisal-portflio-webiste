"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Layout, Palette, Smartphone, Zap, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "React Development",
    description:
      "Custom web applications built with React and modern JavaScript for interactive and dynamic user interfaces.",
    features: [
      "Single-page applications (SPAs)",
      "Component-based architecture",
      "State management with Redux/Context",
      "React hooks implementation",
      "Performance optimization",
      "Responsive UI design",
    ],
  },
  {
    icon: <Layout className="h-12 w-12 text-primary" />,
    title: "Next.js Development",
    description:
      "Modern web applications with server-side rendering, static site generation, and optimized performance.",
    features: [
      "Server-side rendering (SSR)",
      "Static site generation (SSG)",
      "API routes and serverless functions",
      "SEO optimization",
      "Image optimization",
      "Incremental static regeneration",
    ],
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "UI/UX Implementation",
    description: "Transforming design mockups into pixel-perfect, functional interfaces with attention to detail.",
    features: [
      "Figma to React conversion",
      "Responsive design implementation",
      "Animation and transitions",
      "Accessibility compliance",
      "Cross-browser compatibility",
      "Design system implementation",
    ],
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Responsive Web Design",
    description: "Creating websites that work flawlessly across all devices, from mobile phones to desktop computers.",
    features: [
      "Mobile-first approach",
      "Fluid layouts and grids",
      "Flexible images and media",
      "CSS frameworks integration",
      "Touch-friendly interfaces",
      "Device testing and optimization",
    ],
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Performance Optimization",
    description: "Improving website speed and performance for better user experience and SEO rankings.",
    features: [
      "Code splitting and lazy loading",
      "Bundle size optimization",
      "Image and asset optimization",
      "Caching strategies",
      "Core Web Vitals improvement",
      "Lighthouse score optimization",
    ],
  },
  {
    icon: <Layers className="h-12 w-12 text-primary" />,
    title: "Frontend Architecture",
    description: "Designing scalable frontend architectures with modern state management and component libraries.",
    features: [
      "Component structure planning",
      "State management design",
      "Folder structure organization",
      "Code standards implementation",
      "Reusable component libraries",
      "Testing strategy development",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-24 gradient-bg">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">My Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer comprehensive frontend development services to help bring your digital ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="rounded-full bg-primary/20 p-1 mr-2 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary font-medium hover:underline inline-block mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20 bg-primary/10 p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Need a Custom Solution?</h3>
                <p className="text-muted-foreground">
                  I specialize in creating tailored frontend solutions to meet your unique business requirements.
                  Contact me to discuss your project.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
