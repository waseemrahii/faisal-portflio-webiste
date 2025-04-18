"use client"

import { HeroSection } from "./sections/hero-section"
import { ServicesSection } from "./sections/services-section"
import { TechStackSection } from "./sections/tech-stack-section"

export function ClientPageWrapper() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
    </main>
  )
}
