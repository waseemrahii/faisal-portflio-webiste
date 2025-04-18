import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Muhammad Faisal",
    role: "Senior Frontend Developer",
    image: "/images/faisal-profile.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex justify-center">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-md">
              <div className="relative h-64 w-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Passionate about creating beautiful, responsive user interfaces with modern frontend technologies.
                  Experienced in building interactive UIs, optimizing performance, and creating seamless user
                  experiences.
                </p>
                <div className="flex space-x-4">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-500">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-700">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
