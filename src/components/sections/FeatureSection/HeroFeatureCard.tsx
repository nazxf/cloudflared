import { motion } from 'framer-motion'
import { heroFeature } from '@/data/features'
import { CountUpNumber } from '@/components/ui/CountUpNumber'
import type { FadeFn } from '@/lib/motion'
import { SpeedMeterVisual } from './SpeedMeterVisual'

type HeroFeatureCardProps = {
  fadeUp: FadeFn
}

type ParsedMetric = {
  prefix: string
  value: number
  decimals: number
  suffix: string
  raw: string
}

const parseMetric = (raw: string): ParsedMetric => {
  // Match leading sign/digits with optional decimal, plus optional prefix/suffix.
  const match = raw.match(/^([^0-9.-]*)([\d.]+)(.*)$/)
  if (!match) return { prefix: '', value: 0, decimals: 0, suffix: raw, raw }
  const [, prefix, num, suffix] = match
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return { prefix, value: parseFloat(num), decimals, suffix, raw }
}

/**
 * Large hero feature card highlighting NVMe + LiteSpeed stack with eyebrow tag,
 * description, 3 metrics (count-up), and the SpeedMeter visual. Sits in the left column
 * of the FeatureSection layout.
 */
export function HeroFeatureCard({ fadeUp }: HeroFeatureCardProps) {
  const HeroIcon = heroFeature.icon

  return (
    <motion.article
      {...fadeUp(0.06)}
      className="group relative overflow-hidden rounded-2xl border border-cloud-line bg-white p-7 shadow-cloud-card lg:p-9"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,95,0,0.10),transparent_70%)]"
      />
      <div className="relative grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-9">
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
            {heroFeature.metrics.map((metric) => {
              const parsed = parseMetric(metric.value)
              return (
                <div key={metric.label}>
                  <div className="text-xl font-black text-cloud-orange tabular-nums lg:text-2xl">
                    <CountUpNumber
                      value={parsed.value}
                      decimals={parsed.decimals}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                    />
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                    {metric.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <SpeedMeterVisual />
      </div>
    </motion.article>
  )
}
