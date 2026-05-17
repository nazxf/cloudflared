import { motion } from 'framer-motion'
import { heroFeature } from '@/data/features'
import type { FadeFn } from '@/lib/motion'
import { SpeedMeterVisual } from './SpeedMeterVisual'

type HeroFeatureCardProps = {
  fadeUp: FadeFn
}

/**
 * Large hero feature card highlighting NVMe + LiteSpeed stack with eyebrow tag,
 * description, 3 metrics, and the SpeedMeter visual. Sits in the left column
 * of the FeatureSection layout.
 */
export function HeroFeatureCard({ fadeUp }: HeroFeatureCardProps) {
  const HeroIcon = heroFeature.icon

  return (
    <motion.article
      {...fadeUp(0.06)}
      className="group relative overflow-hidden rounded-lg border border-cloud-line bg-white p-7 shadow-cloud-card lg:p-9"
    >
      <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-9">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-cloud-orange">
            <HeroIcon size={13} strokeWidth={2.6} />
            {heroFeature.eyebrow}
          </span>
          <h3 className="mt-5 text-2xl font-black leading-[1.18] text-cloud-navy lg:text-[28px]">
            {heroFeature.title}
          </h3>
          <p className="mt-4 text-sm font-medium leading-7 text-slate-600 lg:text-[15px]">
            {heroFeature.description}
          </p>
          <div className="mt-7 grid grid-cols-3 gap-4 border-t border-cloud-line pt-6">
            {heroFeature.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-xl font-black text-cloud-orange tabular-nums lg:text-2xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <SpeedMeterVisual />
      </div>
    </motion.article>
  )
}
