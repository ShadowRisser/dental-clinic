import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { TrustBar } from '@/components/site/trust-bar'
import { StatsSection } from '@/components/site/stats-section'
import { ServicesSection } from '@/components/site/services-section'
import { WhyUsSection } from '@/components/site/why-us-section'
import { AboutSection } from '@/components/site/about-section'
import { DoctorsSection } from '@/components/site/doctors-section'
import { ProcessSection } from '@/components/site/process-section'
import { PricingSection } from '@/components/site/pricing-section'
import { TestimonialsSection } from '@/components/site/testimonials-section'
import { FaqSection } from '@/components/site/faq-section'
import { BookingSection } from '@/components/site/booking-section'
import { ContactSection } from '@/components/site/contact-section'
import { Footer } from '@/components/site/footer'
import { AiChatbot } from '@/components/site/ai-chatbot'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <AboutSection />
        <DoctorsSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <BookingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <AiChatbot />
    </div>
  )
}
