import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CTASection } from "@/components/sections/cta-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { TechStackShowcase } from "@/components/sections/tech-stack-showcase"
import { BlogPreview } from "@/components/sections/blog-preview"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TechStackSection />
      <PortfolioPreview />
      <TechStackShowcase />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreview />
      <CTASection />
    </main>
  )
}
