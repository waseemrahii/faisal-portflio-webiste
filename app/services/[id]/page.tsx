"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Server, Database, Globe, Smartphone, Cpu } from "lucide-react"

const services = {
  "web-development": {
    icon: <Code className="h-12 w-12 text-[#8B4513]" />,
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    features: [
      "Responsive design for all devices",
      "Custom CMS integration",
      "E-commerce solutions",
      "Progressive Web Apps (PWAs)",
      "API development and integration",
      "Performance optimization",
    ],
    benefits: [
      "Increased online visibility and reach",
      "Improved user engagement and conversion rates",
      "Streamlined business processes",
      "Enhanced customer experience",
      "Competitive advantage in the digital marketplace",
    ],
    process: [
      "Requirements gathering and analysis",
      "UI/UX design and prototyping",
      "Frontend and backend development",
      "Testing and quality assurance",
      "Deployment and maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  "mobile-development": {
    icon: <Smartphone className="h-12 w-12 text-[#8B4513]" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    features: [
      "Native iOS and Android development",
      "Cross-platform development with React Native",
      "App Store and Google Play submission",
      "Push notifications",
      "Offline functionality",
      "Integration with device features (camera, GPS, etc.)",
    ],
    benefits: [
      "Reach users on their preferred devices",
      "Improved customer engagement and loyalty",
      "New revenue streams through mobile channels",
      "Enhanced brand presence and recognition",
      "Competitive advantage in the mobile market",
    ],
    process: [
      "Market research and competitor analysis",
      "UI/UX design and prototyping",
      "Native or cross-platform development",
      "Testing on multiple devices",
      "App store submission and optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  "backend-development": {
    icon: <Server className="h-12 w-12 text-[#8B4513]" />,
    title: "Backend Development",
    description: "Robust server-side applications with Node.js, Express, and MongoDB.",
    features: [
      "RESTful API development",
      "Database design and optimization",
      "Authentication and authorization",
      "Cloud deployment and scaling",
      "Microservices architecture",
      "Performance monitoring and optimization",
    ],
    benefits: [
      "Scalable infrastructure for growing businesses",
      "Improved application performance and reliability",
      "Secure data management and processing",
      "Efficient resource utilization",
      "Reduced operational costs",
    ],
    process: [
      "Architecture planning and design",
      "Database schema design",
      "API development and documentation",
      "Security implementation",
      "Testing, deployment, and monitoring",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
  "database-design": {
    icon: <Database className="h-12 w-12 text-[#8B4513]" />,
    title: "Database Design",
    description: "Efficient database schemas with MongoDB, MySQL, and PostgreSQL.",
    features: [
      "Schema design and optimization",
      "Data migration and transformation",
      "Query optimization",
      "Database scaling strategies",
      "Data backup and recovery",
      "Security implementation",
    ],
    benefits: [
      "Improved data integrity and reliability",
      "Faster query performance and response times",
      "Efficient data storage and retrieval",
      "Scalable data architecture",
      "Enhanced data security and compliance",
    ],
    process: [
      "Requirements analysis and data modeling",
      "Schema design and normalization",
      "Indexing strategy development",
      "Security and access control implementation",
      "Performance testing and optimization",
    ],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
  },
  "api-development": {
    icon: <Globe className="h-12 w-12 text-[#8B4513]" />,
    title: "API Development",
    description: "Building RESTful and GraphQL APIs for seamless integration.",
    features: [
      "RESTful API design",
      "GraphQL implementation",
      "API documentation",
      "Authentication and authorization",
      "Rate limiting and caching",
      "Versioning and maintenance",
    ],
    benefits: [
      "Seamless integration between systems",
      "Improved developer experience",
      "Flexible data access and manipulation",
      "Reduced development time for frontend teams",
      "Future-proof architecture",
    ],
    process: [
      "API design and planning",
      "Endpoint development and testing",
      "Authentication and security implementation",
      "Documentation generation",
      "Performance optimization and deployment",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
  "performance-optimization": {
    icon: <Cpu className="h-12 w-12 text-[#8B4513]" />,
    title: "Performance Optimization",
    description: "Improving application performance and scalability.",
    features: [
      "Frontend performance optimization",
      "Backend scaling strategies",
      "Database query optimization",
      "Caching implementation",
      "Load testing and monitoring",
      "Infrastructure optimization",
    ],
    benefits: [
      "Improved user experience and satisfaction",
      "Reduced bounce rates and increased conversions",
      "Lower operational costs",
      "Better search engine rankings",
      "Increased system reliability under load",
    ],
    process: [
      "Performance audit and bottleneck identification",
      "Optimization strategy development",
      "Implementation of performance improvements",
      "Monitoring and measurement",
      "Continuous optimization",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = params.id as string
  const service = services[serviceId as keyof typeof services]

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-[#8B4513] hover:bg-[#6d3710] text-white">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">{service.title}</h1>
            <p className="text-xl text-[#8B4513]/80 mb-12 text-center max-w-3xl mx-auto">{service.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <svg className="h-6 w-6 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#8B4513]/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button asChild className="bg-[#8B4513] hover:bg-[#6d3710] text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#8B4513]">Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="h-6 w-6 text-green-500 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-[#8B4513]/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#8B4513]">Our Process</h2>
              <ol className="space-y-3 relative border-l border-[#8B4513]/30 pl-6">
                {service.process.map((step, index) => (
                  <li key={index} className="mb-6">
                    <div className="absolute w-6 h-6 bg-[#8B4513] rounded-full -left-3 flex items-center justify-center">
                      <span className="text-white text-xs">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-medium text-[#8B4513]">Step {index + 1}</h3>
                    <p className="text-[#8B4513]/80">{step}</p>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          <motion.div
            className="bg-[#f8e1e1] p-8 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#8B4513]">Ready to Get Started?</h2>
            <p className="text-[#8B4513]/80 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and how our {service.title.toLowerCase()} services
              can help your business grow.
            </p>
            <Button asChild className="bg-[#8B4513] hover:bg-[#6d3710] text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
