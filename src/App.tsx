import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { navLinks } from '@/data/nav'
import { createFadeUp, createHeroFade, createFloatingMotion } from '@/lib/motion'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FeatureSection } from '@/components/sections/FeatureSection'
import { ComparisonSection } from '@/components/sections/ComparisonSection'
import { InfrastructureSection } from '@/components/sections/InfrastructureSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [announcementOpen, setAnnouncementOpen] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  const activeSection = useScrollSpy(navLinks.map((link) => link.id), { initial: 'home' })
  const scrolled = useScrollPosition(24)

  const fadeUp = createFadeUp(!!shouldReduceMotion)
  const heroFade = createHeroFade(!!shouldReduceMotion)
  const floatingMotion = createFloatingMotion(!!shouldReduceMotion)

  return (
    <div className="min-h-screen bg-white text-cloud-navy">
      <AnnouncementBar open={announcementOpen} onClose={() => setAnnouncementOpen(false)} />
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        scrolled={scrolled}
        announcementOpen={announcementOpen}
      />

      <main className={announcementOpen ? 'pt-9 sm:pt-10' : 'pt-0'}>
        <HeroSection heroFade={heroFade} />
        <PricingSection fadeUp={fadeUp} />
        <FeatureSection fadeUp={fadeUp} />
        <ComparisonSection fadeUp={fadeUp} />
        <InfrastructureSection fadeUp={fadeUp} floatingMotion={floatingMotion} />
        <TestimonialsSection fadeUp={fadeUp} />
        <FaqSection fadeUp={fadeUp} />
        <CtaSection fadeUp={fadeUp} />
      </main>

      <Footer />
    </div>
  )
}

export default App
