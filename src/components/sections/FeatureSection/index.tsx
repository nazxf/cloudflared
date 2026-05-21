import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { features } from '@/data/features'
import { containerClass } from '@/components/ui/container.styles'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { FadeFn } from '@/lib/motion'
import { HeroFeatureCard } from './HeroFeatureCard'
import { SecurityStackCard } from './SecurityStackCard'

type FeatureSectionProps = {
  fadeUp: FadeFn
}

/**
 * Bento-style features layout:
 * - Left: large performance card with SpeedMeter visual.
 * - Right top: dark Security Stack card (lock + WAF + DDoS + backup).
 * - Right bottom: 2 small feature cards from `features` data.
 */
export function FeatureSection({ fadeUp }: FeatureSectionProps) {
  const smallFeatures = features.slice(1) // skip Keamanan Berlapis (covered by SecurityStackCard)

  return (
    <section id="features" className="section-edge-top relative bg-white py-20 lg:py-24">
      <div className={containerClass}>
        <motion.div {...fadeUp(0.02)} className="max-w-[760px]">
          <SectionLabel icon={Zap}>Fitur Unggulan</SectionLabel>
          <h2 className="mt-5 text-[32px] font-black leading-[1.12] tracking-hero text-cloud-navy sm:text-[44px]">
            Semua yang Dibutuhkan untuk Website yang Cepat dan Aman
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <HeroFeatureCard fadeUp={fadeUp} />

          <div className="grid gap-6">
            <SecurityStackCard fadeUp={fadeUp} delay={0.08} />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {smallFeatures.map((feature, index) => {
                const Icon = feature.icon

                return (
                  <motion.article
                    key={feature.title}
                    {...fadeUp(0.14 + index * 0.06)}
                    className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-cloud-line bg-white p-6 shadow-[0_18px_45px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cloud-orange/40 hover:shadow-[0_26px_55px_rgba(255,95,0,0.12)]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cloud-orange/0 transition-colors duration-500 group-hover:bg-cloud-orange/10"
                    />
                    <div className="relative inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-orange-50 text-cloud-orange transition group-hover:scale-105 group-hover:bg-cloud-orange group-hover:text-white">
                      <Icon size={22} strokeWidth={2.4} />
                    </div>
                    <div className="relative">
                      <h3 className="text-base font-black text-cloud-navy">{feature.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
