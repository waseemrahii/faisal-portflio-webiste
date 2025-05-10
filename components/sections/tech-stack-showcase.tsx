"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const technologies = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "bg-blue-500",
    tools: [
      {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        description: "Building type-safe applications with enhanced developer experience",
        experience: "2+ years",
        projects: 20,
      },
      {
        name: "React",
        icon: "/icons/react.svg",
        description: "Building interactive UIs with React and its ecosystem",
        experience: "2+ years",
        projects: 20,
      },
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        description: "Creating server-rendered and static React applications",
        experience: "31 years",
        projects: 5,
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
        description: "Crafting beautiful, responsive designs with utility classes",
        experience: "2+ years",
        projects: 20,
      },
     
    ],
  },
  {
    name: "UI Libraries",
    icon: "🧩",
    color: "bg-purple-500",
    tools: [
      {
        name: "Material UI",
        icon: "/icons/mui.svg",
        description: "Creating professional interfaces with Material Design components",
        experience: "1+ years",
        projects: 5,
      },
      {
        name: "Chakra UI",
        icon: "/icons/chakra.svg",
        description: "Building accessible and customizable component systems",
        experience: "1+ years",
        projects: 1,
      },
      {
        name: "Framer Motion",
        icon: "/icons/framer.svg",
        description: "Adding fluid animations and transitions to React applications",
        experience: "1+ years",
        projects: 7,
      },
      {
        name: "Styled Components",
        icon: "/icons/styled.svg",
        description: "Creating component-based styling with CSS-in-JS",
        experience: "1+ years",
        projects: 8,
      },
    ],
  },
  {
    name: "State Management",
    icon: "⚙️",
    color: "bg-green-500",
    tools: [
      {
        name: "Redux",
        icon: "/icons/redux.svg",
        description: "Managing complex application state with predictable state containers",
        experience: "2+ years",
        projects: 15,
      },
      {
        name: "Context API",
        icon: "/icons/react.svg",
        description: "Using React's built-in state management for component trees",
        experience: "2+ years",
        projects: 8,
      },
      {
        name: "Zustand",
        icon: "/icons/zustand.svg",
        description: "Implementing lightweight state management with hooks",
        experience: "1+ years",
        projects: 2,
      },
      {
        name: "React Query",
        icon: "/icons/reactquery.svg",
        description: "Managing server state with powerful data-fetching library",
        experience: "2+ years",
        projects: 4,
      },
    ],
  },
  {
    name: "Tools & Testing",
    icon: "🔧",
    color: "bg-yellow-500",
    tools: [
      {
        name: "Jest",
        icon: "/icons/jest.svg",
        description: "Writing and running unit tests for JavaScript applications",
        experience: "1+ years",
        projects: 2,
      },
      
      {
        name: "Webpack",
        icon: "/icons/webpack.svg",
        description: "Configuring and optimizing module bundling for web apps",
        experience: "1+ years",
        projects: 3,
      },
      {
        name: "Storybook",
        icon: "/icons/storybook.svg",
        description: "Building and documenting UI components in isolation",
        experience: "1+ years",
        projects: 1,
      },
    ],
  },
]

export function TechStackShowcase() {
  const [activeCategory, setActiveCategory] = useState(technologies[0])
  const [activeTool, setActiveTool] = useState(technologies[0].tools[0])

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">My Technology Arsenal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the tools and technologies I use to build powerful, responsive, and beautiful frontend experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">Technology Categories</h3>
              <div className="space-y-3">
                {technologies.map((category, index) => (
                  <motion.button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all flex items-center ${
                      activeCategory.name === category.name
                        ? "bg-primary text-white shadow-md"
                        : "bg-secondary/50 hover:bg-secondary"
                    }`}
                    onClick={() => {
                      setActiveCategory(category)
                      setActiveTool(category.tools[0])
                    }}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">{activeCategory.name} Technologies</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {activeCategory.tools.map((tool, index) => (
                  <motion.button
                    key={index}
                    className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${
                      activeTool.name === tool.name
                        ? `border-2 border-${activeCategory.color.replace("bg-", "")} shadow-md`
                        : "border border-border hover:border-primary/30"
                    }`}
                    onClick={() => setActiveTool(tool)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                      {tool.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium">{tool.name}</span>
                  </motion.button>
                ))}
              </div>

              <motion.div
                className="bg-secondary/30 rounded-lg p-6"
                key={activeTool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">{activeTool.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-1">{activeTool.name}</h4>
                    <p className="text-muted-foreground">{activeTool.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">Experience</h5>
                    <p className="text-lg font-semibold text-primary">{activeTool.experience}</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">Projects Completed</h5>
                    <p className="text-lg font-semibold text-primary">{activeTool.projects}+</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
