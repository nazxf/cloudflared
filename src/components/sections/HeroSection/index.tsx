import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Package, Zap } from 'lucide-react'
import heroCloudServer from '@/assets/hero-cloud-server.png'
import { trustBadges } from '@/data/features'
import { containerClass } from '@/components/ui/container.styles'
import { IconBadge } from '@/components/ui/IconBadge'
import type { HeroFadeFn } from '@/lib/motion'
import { DomainFinder } from './DomainFinder'
import { HeroFloatingChips } from './HeroFloatingChips'
import { HeroStats } from './HeroStats'
import './Hero.css'

type HeroSectionProps = {
  heroFade: HeroFadeFn
}

/**
 * Above-the-fold hero: badge, headline, supporting copy, domain finder,
 * primary/secondary CTAs, trust badges row, and the cloud server illustration
 * with floating SSL/uptime/location chips. Stats strip anchors the section bottom.
 */
export function HeroSection({ heroFade }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cloud-hero pb-16 pt-20 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className={`${containerClass} relative z-10`}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-6">
          <motion.div {...heroFade(0.04)} className="max-w-[710px] pt-4 lg:pt-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/85 px-4 py-2 text-sm font-extrabold text-cloud-orange shadow-[0_14px_34px_rgba(255,106,0,0.08)] backdrop-blur">
              <Zap size={15} fill="currentColor" strokeWidth={2.6} />
              Hosting Cepat. Aman. Terpercaya.
            </div>

            <h1 className="max-w-[710px] text-[42px] font-black leading-[1.06] tracking-hero text-cloud-navy sm:text-[58px] lg:text-[64px] xl:text-[70px]">
              <span className="block">Web Hosting</span>
              <span className="block">
                yang <span className="text-cloud-orange">Ngebut &amp;</span>
              </span>
              <span className="block text-cloud-orange">Aman</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-base font-semibold leading-[1.8] text-slate-600">
              CloudFlared menyediakan layanan web hosting berkinerja tinggi dengan keamanan terbaik
              dan uptime 99.9%.
            </p>

            <DomainFinder />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg bg-cloud-orange px-7 text-[15px] font-extrabold text-white shadow-cloud-orange transition hover:-translate-y-0.5 hover:bg-cloud-orange-2"
              >
                Mulai Sekarang
                <ArrowRight size={19} />
              </a>
              <a
                href="#pricing"
                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg border border-cloud-line bg-white px-7 text-[15px] font-extrabold text-cloud-navy shadow-[0_16px_36px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:border-cloud-orange/45 hover:text-cloud-orange"
              >
                Lihat Paket
                <Package size={18} />
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="flex items-center gap-3">
                  <IconBadge icon={badge.icon} variant="chip" size="md" />
                  <span>
                    <span className="block text-sm font-extrabold text-cloud-navy">{badge.title}</span>
                    <span className="mt-0.5 block text-xs font-semibold text-slate-500">
                      {badge.description}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...heroFade(0.18)}
            className="hero-art relative mx-auto w-full max-w-[640px] lg:max-w-none"
          >
            <img
              src={heroCloudServer}
              alt="Ilustrasi server cloud aman CloudFlared"
              className="relative z-10 mx-auto block h-auto w-full max-w-[640px] select-none drop-shadow-[0_40px_70px_rgba(255,106,0,0.16)] lg:max-w-[720px] xl:max-w-[780px]"
            />
            <HeroFloatingChips reduceMotion={!!shouldReduceMotion} />
          </motion.div>
        </div>

        <HeroStats heroFade={heroFade} />
      </div>
    </section>
  )
}
