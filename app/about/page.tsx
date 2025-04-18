"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my journey, expertise, and passion for web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-primary">My Story</h2>
              <p className="text-muted-foreground mb-6">
                I'm Muhammad Faisal, a passionate Senior Frontend Developer with over 5 years of experience in building
                modern web applications. My journey in web development began with a fascination for creating interactive
                user experiences and has evolved into a deep expertise in frontend development.
              </p>
              <p className="text-muted-foreground mb-6">
                Specializing in React and modern frontend technologies, I've helped businesses of all sizes transform
                their digital presence through custom web solutions. My experience extends to Next.js for server-side
                rendering, responsive design, and creating intuitive user interfaces.
              </p>
              <p className="text-muted-foreground">
                Based in Islamabad, Pakistan, I've worked with clients across various industries, from startups to
                established enterprises, delivering solutions that drive business growth and enhance user engagement.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative max-w-[350px] mx-auto">
                <div className="absolute inset-0 bg-primary/10 rounded-full transform translate-x-4 -translate-y-4"></div>
                <div className="relative h-[350px] w-[350px] rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/images/faisal-profile.png"
                    alt="Muhammad Faisal - MERN Stack Developer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Rest of the component remains unchanged */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary">My Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                  title: "Quality",
                  description: "I am committed to delivering high-quality solutions that exceed client expectations.",
                },
                {
                  icon: <Award className="h-10 w-10 text-primary" />,
                  title: "Innovation",
                  description: "I constantly explore new technologies and approaches to solve complex problems.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Collaboration",
                  description: "I believe in working closely with clients to achieve the best possible outcomes.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-primary" />,
                  title: "Timeliness",
                  description: "I respect deadlines and deliver projects on time without compromising on quality.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                  <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The rest of the component remains the same */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary">My Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="h-3 bg-primary"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Modern React applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Responsive UI design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>State management with Redux</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="h-3 bg-primary"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Next.js Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Server-side rendering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Static site generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>API routes and middleware</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="h-3 bg-primary"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">WordPress Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Custom theme development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Plugin customization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>E-commerce with WooCommerce</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Developer Skills Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary">My Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Frontend Development",
                  skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Framer Motion"],
                  color: "bg-blue-500",
                },
                {
                  title: "Backend Development",
                  skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication", "WebSockets"],
                  color: "bg-green-500",
                },
                {
                  title: "Database Management",
                  skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "Data Modeling"],
                  color: "bg-purple-500",
                },
                {
                  title: "DevOps & Tools",
                  skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Performance Optimization"],
                  color: "bg-orange-500",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`h-2 ${category.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full ${category.color} mr-2`}></div>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Projects Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary">Client Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  client: "TechSolutions Inc.",
                  project: "E-commerce Platform",
                  description:
                    "Developed a full-featured e-commerce platform with payment integration and inventory management.",
                  result: "Increased online sales by 45% within 3 months of launch.",
                },
                {
                  client: "HealthCare Connect",
                  project: "Patient Management System",
                  description:
                    "Built a secure patient portal with appointment scheduling and medical records management.",
                  result: "Reduced administrative workload by 30% and improved patient satisfaction.",
                },
                {
                  client: "EduLearn Academy",
                  project: "Learning Management System",
                  description:
                    "Created an interactive learning platform with course management and student progress tracking.",
                  result: "Expanded online student enrollment by 60% in the first year.",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-primary/5 rounded-lg p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full mb-2">
                      {project.client}
                    </span>
                    <h3 className="text-xl font-semibold">{project.project}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center text-green-600">
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="font-medium">{project.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-primary/10 p-8 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">Ready to Work With Me?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge web development solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <a
                  href="https://wa.me/923347534934"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
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
                    className="mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.5 17.5 C 14.5 17.5, 14.5 17.5, 14.5 17.5 Q 18 16, 19.5 13 A 9.5 9.5 0 0 0 20 10.5 A 9.5 9.5 0 0 0 10.5 1 A 9.5 9.5 0 0 0 1 10.5 A 9.5 9.5 0 0 0 3.5 17 L 2 22 L 7 20.5 A 9.5 9.5 0 0 0 10.5 21.5 A 9.5 9.5 0 0 0 20 12" />
                  </svg>
                  WhatsApp Me
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
