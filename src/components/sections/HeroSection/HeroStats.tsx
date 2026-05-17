import { motion } from 'framer-motion'
import { heroStats } from '@/data/features'
import type { HeroFadeFn } from '@/lib/motion'

type HeroStatsProps = {
  heroFade: HeroFadeFn
}

/**
 * 4-up stats strip floating at the bottom of the hero, with subtle dividers.
 * Layout: 1 col on mobile, 2 cols on sm, 4 cols on lg.
 */
export function HeroStats({ heroFade }: HeroStatsProps) {
  return (
    <motion.div
      {...heroFade(0.26)}
      className="relative z-20 mt-12 grid rounded-lg border border-cloud-line bg-white/95 px-5 py-5 shadow-cloud-card backdrop-blur sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:px-0 lg:py-6"
    >
      {heroStats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.title}
            className="stat-divider flex items-center justify-center gap-4 px-5 py-4 lg:py-0"
          >
            <Icon size={30} strokeWidth={2.2} className="text-cloud-navy" />
            <span>
              <span className="block text-2xl font-black leading-none text-cloud-navy">
                {stat.title}
              </span>
              <span className="mt-1 block text-sm font-semibold text-slate-500">
                {stat.description}
              </span>
            </span>
          </div>
        )
      })}
    </motion.div>
  )
}
