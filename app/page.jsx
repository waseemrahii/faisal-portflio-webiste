import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { TechStackShowcase } from "@/components/sections/tech-stack-showcase"
import { BlogPreview } from "@/components/sections/blog-preview"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioPreview />
      <TechStackShowcase />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreview />
      <CTASection />
    </main>
  )
}
