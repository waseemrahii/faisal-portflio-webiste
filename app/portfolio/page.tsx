"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Updated projects with more frontend-focused descriptions
const projects = [
  {
    id: "bulk-email-system",
    title: "Bulk Email Marketing Platform",
    description:
      "Responsive frontend interface for email marketing with interactive dashboards and analytics visualizations.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H4FMxQNYwN6X2rkAnINvfG8LWV4oHf.png",
    link: "#",
    tags: ["React", "Tailwind CSS", "Chart.js", "Redux"],
    category: "Frontend Application",
  },
  {
    id: "vistamart-ecommerce",
    title: "VistaMart E-commerce Platform",
    description:
      "Modern e-commerce frontend with responsive product galleries, animated transitions, and optimized checkout flow.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-imb8gdkPsqJS9wQHcg9XZ6pc7sfuEz.png",
    link: "#",
    tags: ["Next.js", "React", "Framer Motion", "Stripe Elements"],
    category: "E-commerce",
  },
  {
    id: "shaips-healthcare",
    title: "SHAIPS Healthcare Platform",
    description:
      "Accessible healthcare interface with intuitive navigation, responsive design, and optimized user flows.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jjs25DdjNhynhoWpBc2yWD17zg4jcO.png",
    link: "#",
    tags: ["React", "Tailwind CSS", "Accessibility", "Redux"],
    category: "Healthcare",
  },
  {
    id: "lhd-pk-website",
    title: "LHD Pakistan Website",
    description: "Corporate website with modern design, animations, and responsive layout optimized for all devices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "https://lhd-pk.com/",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
  },
  {
    id: "e-learning-platform",
    title: "E-Learning Platform",
    description:
      "Interactive learning interface with video players, progress tracking, and gamified learning elements.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    link: "https://example.com/elearning",
    tags: ["React", "Redux", "Styled Components", "Video.js"],
    category: "Web Application",
  },
  {
    id: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    description: "Property listing interface with map integration, virtual tours, and advanced filtering capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    link: "https://example.com/realestate",
    tags: ["Next.js", "React", "Google Maps API", "Framer Motion"],
    category: "Web Application",
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Patient Portal",
    description: "Secure patient interface with appointment scheduling, medical records, and doctor communication.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/healthcare",
    tags: ["React", "Tailwind CSS", "Chart.js", "Redux"],
    category: "Web Application",
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    description: "Restaurant interface with ordering system, menu management, and customer loyalty features.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/restaurant",
    tags: ["React", "Redux", "Styled Components", "Framer Motion"],
    category: "Web Application",
  },
  {
    id: "travel-booking-platform",
    title: "Travel Booking Platform",
    description: "Travel booking interface with interactive maps, date pickers, and seamless booking flow.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    link: "https://example.com/travel",
    tags: ["Next.js", "React", "Mapbox", "React Hook Form"],
    category: "Web Application",
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking Application",
    description:
      "Mobile-responsive fitness app with progress visualizations, workout planning, and nutrition tracking.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/fitness",
    tags: ["React", "Chart.js", "Tailwind CSS", "Redux"],
    category: "Web Application",
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    description: "Event planning interface with interactive calendars, ticketing system, and attendee management.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    link: "https://example.com/events",
    tags: ["React", "FullCalendar", "Tailwind CSS", "Redux"],
    category: "Web Application",
  },
  {
    id: "luxury-brand-website",
    title: "Luxury Brand Website",
    description:
      "High-end e-commerce interface with premium animations, product showcases, and immersive shopping experience.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
    link: "https://example.com/luxury",
    tags: ["Next.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    category: "E-commerce",
  },
  {
    id: "bulk-email-admin",
    title: "Bulk Email Admin Dashboard",
    description:
      "Administrative interface for email marketing with data visualizations, campaign management, and analytics.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H4FMxQNYwN6X2rkAnINvfG8LWV4oHf.png",
    link: "#",
    tags: ["React", "Chart.js", "Material UI", "Redux"],
    category: "Web Application",
  },
  {
    id: "employee-dashboard",
    title: "Employee Management Dashboard",
    description: "HR dashboard with attendance tracking, performance metrics, and project management features.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BbY2oZryS8MX7EDP0amzVFxtgmh04U.png",
    link: "#",
    tags: ["React", "Recharts", "Tailwind CSS", "Redux"],
    category: "Web Application",
  },
  {
    id: "light-house-vr",
    title: "Light House VR Experience",
    description: "Immersive VR web experience with 3D interactions, animations, and responsive design.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xOyxx5Dqj0G28BRak1u5jnaQDiIoK4.png",
    link: "#",
    tags: ["React", "Three.js", "WebVR", "GSAP"],
    category: "VR Application",
  },
  {
    id: "registration-system",
    title: "User Registration System",
    description:
      "User-friendly registration interface with form validation, multi-step processes, and responsive design.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wnqEp0rVqaUbdJeld8UVh1Yzf9lKv2.png",
    link: "#",
    tags: ["React", "React Hook Form", "Zod", "Tailwind CSS"],
    category: "Web Application",
  },
  {
    id: "coffee-shop",
    title: "Coffee Shop Website",
    description: "Modern, responsive website for a coffee shop with animations, menu showcases, and online ordering.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-McjhmoZyh5cyS3WQYIFr8asMBRi40l.png",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    category: "Web Development",
  },
]

export default function PortfolioPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">My Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my complete collection of projects showcasing my expertise in frontend development with React,
              Next.js, and modern web technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg project-card group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=224&width=400"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 project-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/40 opacity-0 project-overlay transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="bg-white/90 text-primary text-xs px-2 py-1 rounded">
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
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <span className="text-xs bg-secondary text-primary px-2 py-1 rounded">{project.category}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Want to see more of my work?</h2>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
