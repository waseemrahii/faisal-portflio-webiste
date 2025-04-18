"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react"

const projects = {
  "bulk-email-system": {
    title: "Bulk Email Marketing Platform",
    description: "Comprehensive email marketing system with campaign management, analytics, and performance tracking.",
    challenges: [
      "Building a scalable email delivery system capable of handling high volumes",
      "Implementing real-time analytics and reporting features",
      "Ensuring high deliverability rates and avoiding spam filters",
    ],
    solutions: [
      "Developed a microservices architecture for scalable email processing",
      "Created a real-time dashboard with comprehensive analytics",
      "Implemented email authentication protocols and best practices",
    ],
    results: [
      "System capable of handling 100,000+ emails per hour",
      "94.63% average open rate across campaigns",
      "Intuitive dashboard for monitoring campaign performance",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redis", "AWS SES"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H4FMxQNYwN6X2rkAnINvfG8LWV4oHf.png",
    link: "#",
  },
  "vistamart-ecommerce": {
    title: "VistaMart E-commerce Platform",
    description:
      "Complete e-commerce solution with admin dashboard, inventory management, and customer-facing storefront.",
    challenges: [
      "Creating a unified platform for both administrators and customers",
      "Implementing a robust inventory management system",
      "Developing a scalable product catalog with 1000+ items",
    ],
    solutions: [
      "Built separate but integrated admin and customer interfaces",
      "Developed real-time inventory tracking with alerts",
      "Created an optimized database structure for product management",
    ],
    results: [
      "Streamlined management of 1095+ products across 117 stores",
      "Improved order processing efficiency by 40%",
      "Enhanced user experience with intuitive shopping interface",
    ],
    technologies: ["MERN Stack", "Redux", "Payment Gateway Integration", "WebSockets", "Cloud Storage"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-imb8gdkPsqJS9wQHcg9XZ6pc7sfuEz.png",
    link: "#",
  },
  "shaips-healthcare": {
    title: "SHAIPS Healthcare Platform",
    description: "Healthcare gifts and pharmacy services platform with online ordering and patient support features.",
    challenges: [
      "Creating a secure platform for healthcare-related services",
      "Implementing a user-friendly gift selection process",
      "Integrating pharmacy services with gift options",
    ],
    solutions: [
      "Developed a HIPAA-compliant secure platform",
      "Created an intuitive gift selection interface with filtering options",
      "Built an integrated system connecting gifts with pharmacy services",
    ],
    results: [
      "Trusted by 5,000+ happy customers",
      "Streamlined process for sending health-related gifts",
      "Improved patient recovery experience through thoughtful gift options",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jjs25DdjNhynhoWpBc2yWD17zg4jcO.png",
    link: "#",
  },
  "lhd-pk-website": {
    title: "LHD Pakistan Website",
    description: "Corporate website for LHD Pakistan with modern design and responsive layout.",
    challenges: [
      "Creating a scalable platform for business solutions",
      "Implementing a modern, responsive design",
      "Developing a secure authentication system",
    ],
    solutions: [
      "Built a custom React frontend with Next.js",
      "Implemented responsive design with Tailwind CSS",
      "Developed secure authentication with JWT",
    ],
    results: [
      "Increased client engagement by 40%",
      "Improved user experience with faster load times",
      "Enhanced security for sensitive business data",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "https://lhd-pk.com/",
  },
  "e-learning-platform": {
    title: "E-Learning Platform",
    description: "Comprehensive learning management system with course creation, student tracking, and video lessons.",
    challenges: [
      "Building a comprehensive learning management system",
      "Creating user-friendly interfaces for students and teachers",
      "Implementing secure user authentication and role-based access",
    ],
    solutions: [
      "Developed custom WordPress theme with advanced functionality",
      "Created intuitive dashboards for different user roles",
      "Implemented secure login and data protection measures",
    ],
    results: [
      "Streamlined course management for administrators",
      "Improved student engagement with interactive features",
      "Reduced administrative workload by 30%",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    link: "https://example.com/elearning",
  },
  "real-estate-marketplace": {
    title: "Real Estate Marketplace",
    description: "Property listing platform with advanced search, virtual tours, and agent management.",
    challenges: [
      "Creating a comprehensive property listing system",
      "Implementing advanced search functionality",
      "Developing virtual tour capabilities",
    ],
    solutions: [
      "Built a scalable database structure for property listings",
      "Implemented faceted search with multiple filters",
      "Integrated 360° virtual tour technology",
    ],
    results: [
      "Increased property viewing engagement by 65%",
      "Reduced time-to-find for buyers by 40%",
      "Improved agent productivity through streamlined listing management",
    ],
    technologies: ["Next.js", "MongoDB", "Google Maps API", "Three.js", "AWS S3"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    link: "https://example.com/realestate",
  },
  "healthcare-portal": {
    title: "Healthcare Patient Portal",
    description: "Secure patient portal with appointment scheduling, medical records, and doctor communication.",
    challenges: [
      "Building a HIPAA-compliant secure platform",
      "Creating an intuitive appointment scheduling system",
      "Implementing secure medical records access",
    ],
    solutions: [
      "Developed end-to-end encrypted communication system",
      "Created an AI-powered scheduling algorithm",
      "Implemented role-based access control for medical records",
    ],
    results: [
      "Reduced appointment no-shows by 35%",
      "Improved patient satisfaction scores by 28%",
      "Streamlined doctor-patient communication",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/healthcare",
  },
  "restaurant-management": {
    title: "Restaurant Management System",
    description: "Complete restaurant management with ordering, inventory, and customer loyalty programs.",
    challenges: [
      "Creating an integrated system for front and back of house",
      "Implementing real-time inventory management",
      "Developing a customer loyalty program",
    ],
    solutions: [
      "Built a unified platform with role-specific interfaces",
      "Created automated inventory tracking with alerts",
      "Implemented a points-based loyalty system",
    ],
    results: [
      "Reduced order processing time by 45%",
      "Decreased inventory waste by 30%",
      "Increased repeat customer visits by 25%",
    ],
    technologies: ["MERN Stack", "Redux", "Stripe", "WebSockets", "Firebase"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/restaurant",
  },
  "travel-booking-platform": {
    title: "Travel Booking Platform",
    description: "Comprehensive travel booking system with flights, hotels, and package deals.",
    challenges: [
      "Integrating multiple travel service APIs",
      "Creating a unified booking experience",
      "Implementing complex pricing and availability logic",
    ],
    solutions: [
      "Developed a middleware layer for API integration",
      "Created a streamlined multi-step booking process",
      "Implemented real-time pricing and availability checks",
    ],
    results: [
      "Increased booking completion rate by 40%",
      "Reduced customer support inquiries by 35%",
      "Improved cross-selling of travel packages",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Payment Processing"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    link: "https://example.com/travel",
  },
  "fitness-tracking-app": {
    title: "Fitness Tracking Application",
    description: "Workout planning, progress tracking, and nutrition management for fitness enthusiasts.",
    challenges: [
      "Creating an intuitive mobile experience",
      "Implementing accurate fitness tracking algorithms",
      "Developing a comprehensive nutrition database",
    ],
    solutions: [
      "Built a responsive React Native application",
      "Integrated with wearable device APIs",
      "Created a custom nutrition database with search functionality",
    ],
    results: [
      "Achieved 4.8/5 star rating on app stores",
      "Users reported 30% better adherence to fitness goals",
      "Simplified nutrition tracking for users",
    ],
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/fitness",
  },
  "event-management": {
    title: "Event Management Platform",
    description: "Event planning, ticketing, and attendee management for conferences and workshops.",
    challenges: [
      "Creating a scalable ticketing system",
      "Implementing secure check-in processes",
      "Developing comprehensive event analytics",
    ],
    solutions: [
      "Built a QR-based ticketing system",
      "Created a mobile check-in application",
      "Implemented real-time analytics dashboard",
    ],
    results: [
      "Reduced check-in time by 70%",
      "Improved event planning with data-driven insights",
      "Increased attendee satisfaction through streamlined processes",
    ],
    technologies: ["MERN Stack", "Stripe", "AWS", "QR Code Generation", "Analytics"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    link: "https://example.com/events",
  },
  "luxury-brand-website": {
    title: "Luxury Brand Website",
    description: "High-end e-commerce website for a luxury fashion brand with immersive shopping experience.",
    challenges: [
      "Creating a premium digital experience",
      "Implementing high-performance product showcases",
      "Developing a seamless checkout process",
    ],
    solutions: [
      "Built a custom WordPress theme with premium aesthetics",
      "Created interactive product galleries with 3D views",
      "Implemented a streamlined one-page checkout",
    ],
    results: [
      "Increased average order value by 45%",
      "Reduced cart abandonment by 30%",
      "Improved brand perception through premium digital presence",
    ],
    technologies: ["WordPress", "WooCommerce", "JavaScript", "Three.js", "Custom PHP"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
    link: "https://example.com/luxury",
  },
  "bulk-email-admin": {
    title: "Bulk Email Admin Dashboard",
    description: "Comprehensive email marketing system with campaign management, analytics, and performance tracking.",
    challenges: [
      "Building a scalable email delivery system capable of handling high volumes",
      "Implementing real-time analytics and reporting features",
      "Ensuring high deliverability rates and avoiding spam filters",
    ],
    solutions: [
      "Developed a microservices architecture for scalable email processing",
      "Created a real-time dashboard with comprehensive analytics",
      "Implemented email authentication protocols and best practices",
    ],
    results: [
      "System capable of handling 100,000+ emails per hour",
      "94.63% average open rate across campaigns",
      "Intuitive dashboard for monitoring campaign performance",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redis", "AWS SES"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H4FMxQNYwN6X2rkAnINvfG8LWV4oHf.png",
    link: "#",
  },
  "employee-dashboard": {
    title: "Employee Management Dashboard",
    description: "Complete employee management system with attendance tracking, project management, and HR features.",
    challenges: [
      "Creating a unified platform for HR and employee management",
      "Implementing secure authentication and role-based access",
      "Building real-time attendance and project tracking",
    ],
    solutions: [
      "Developed a modular architecture with separate modules for different features",
      "Implemented JWT authentication with role-based permissions",
      "Created real-time dashboards with WebSocket integration",
    ],
    results: [
      "Reduced HR administrative work by 40%",
      "Improved project tracking and employee productivity",
      "Streamlined attendance and leave management processes",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BbY2oZryS8MX7EDP0amzVFxtgmh04U.png",
    link: "#",
  },
  "light-house-vr": {
    title: "Light House VR Experience",
    description: "Immersive VR platform for virtual reality experiences with modern design and responsive layout.",
    challenges: [
      "Creating an immersive VR experience accessible via web browsers",
      "Optimizing performance for smooth VR interactions",
      "Designing intuitive user interfaces for VR navigation",
    ],
    solutions: [
      "Utilized WebVR and Three.js for browser-based VR experiences",
      "Implemented performance optimizations for 3D rendering",
      "Created gesture-based interaction patterns for intuitive navigation",
    ],
    results: [
      "Seamless VR experience across multiple devices",
      "High user engagement with average session time of 15+ minutes",
      "Positive user feedback on immersion and interactivity",
    ],
    technologies: ["React", "Three.js", "WebVR", "Next.js", "WebGL", "3D Modeling"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xOyxx5Dqj0G28BRak1u5jnaQDiIoK4.png",
    link: "#",
  },
  "registration-system": {
    title: "User Registration System",
    description: "Comprehensive user registration and management system with admin dashboard and data export features.",
    challenges: [
      "Building a secure and scalable registration system",
      "Implementing efficient data management and filtering",
      "Creating comprehensive admin controls and reporting",
    ],
    solutions: [
      "Developed a secure authentication system with data encryption",
      "Implemented efficient database queries with indexing",
      "Created an intuitive admin dashboard with advanced filtering",
    ],
    results: [
      "Streamlined registration process with 98% completion rate",
      "Reduced administrative workload through automation",
      "Improved data accuracy and reporting capabilities",
    ],
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "Excel Export"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wnqEp0rVqaUbdJeld8UVh1Yzf9lKv2.png",
    link: "#",
  },
  "coffee-shop": {
    title: "Coffee Shop Website",
    description: "Modern, responsive website for a coffee shop with online ordering and reservation features.",
    challenges: [
      "Creating an attractive, brand-aligned design",
      "Implementing responsive layouts for all devices",
      "Building an intuitive menu and ordering system",
    ],
    solutions: [
      "Designed a custom theme reflecting the coffee shop's brand identity",
      "Implemented mobile-first responsive design principles",
      "Created an easy-to-navigate menu with filtering options",
    ],
    results: [
      "Increased online orders by 35% within first month",
      "Improved customer engagement with interactive elements",
      "Reduced phone reservations through online booking system",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-McjhmoZyh5cyS3WQYIFr8asMBRi40l.png",
    link: "#",
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/portfolio">View All Projects</Link>
        </Button>
      </div>
    )
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <main className="pt-24 gradient-bg">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-primary"
              variants={fadeInUp}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              {project.description}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div variants={fadeInUp} className="w-full">
                <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <div>
                <motion.h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-primary" variants={fadeInUp}>
                  Project Overview
                </motion.h2>
                <motion.div className="space-y-8" variants={fadeInUp}>
                  {[
                    { title: "Challenges", items: project.challenges },
                    { title: "Solutions", items: project.solutions },
                    { title: "Results", items: project.results },
                  ].map((section, index) => (
                    <motion.div key={section.title} variants={fadeInUp}>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary/90">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * itemIndex }}
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div className="mt-8" variants={fadeInUp}>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary/90">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="mt-12" variants={fadeInUp}>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                    <Link href="/contact">
                      Discuss a Similar Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 bg-primary/10 p-6 sm:p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-primary">Interested in working together?</h3>
                <p className="text-muted-foreground">
                  Contact me directly to discuss your project requirements and how I can help you achieve your goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white flex items-center">
                  <a href="https://wa.me/923455998484" target="_blank" rel="noopener noreferrer">
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
                    WhatsApp Me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
