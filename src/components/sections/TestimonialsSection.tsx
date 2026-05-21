import { motion } from 'framer-motion'
import { BadgeCheck, Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { containerClass } from '@/components/ui/container.styles'
import { CountUpNumber } from '@/components/ui/CountUpNumber'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { FadeFn } from '@/lib/motion'

type TestimonialsSectionProps = {
  fadeUp: FadeFn
}

const headlineMetrics = [
  { value: 4.9, decimals: 1, suffix: '★', label: 'Rating Rata-rata' },
  { value: 2300, suffix: '+', label: 'Review Pelanggan', grouping: true },
  { value: 98, suffix: '%', label: 'Renew Rate' },
]

/**
 * Asymmetric testimonial layout:
 * - Left: featured testimonial (large, warm bg, dominant quote).
 * - Right: 2 standard testimonial cards stacked.
 * Top rail shows aggregate rating metrics.
 */
export function TestimonialsSection({ fadeUp }: TestimonialsSectionProps) {
  const [featured, ...others] = testimonials

  return (
    <section id="testimonials" className="section-edge-top relative bg-white py-20 lg:py-24">
      <div className={containerClass}>
        <motion.div {...fadeUp(0.02)} className="mx-auto max-w-[760px] text-center">
          <SectionLabel icon={BadgeCheck}>Testimoni</SectionLabel>
          <h2 className="mt-5 text-[32px] font-black leading-[1.15] tracking-hero text-cloud-navy sm:text-[44px]">
            Dipercaya oleh Ribuan Pelanggan di Seluruh Indonesia
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp(0.06)}
          className="mx-auto mt-9 flex max-w-[640px] flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-cloud-line bg-white/60 px-6 py-4 backdrop-blur"
        >
          {headlineMetrics.map((metric, index) => (
            <div key={metric.label} className="flex items-center gap-3">
              {index > 0 && (
                <span className="hidden h-7 w-px bg-cloud-line sm:block" aria-hidden="true" />
              )}
              <div className="text-left">
                <div className="text-xl font-black leading-none text-cloud-navy tabular-nums">
                  <CountUpNumber
                    value={metric.value}
                    decimals={metric.decimals ?? 0}
                    suffix={metric.suffix}
                    grouping={metric.grouping}
                  />
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-[1080px] gap-7 lg:grid-cols-[1.25fr_1fr]">
          <motion.article
            {...fadeUp(0.08)}
            className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-cloud-orange/30 bg-[linear-gradient(160deg,#fff8f0_0%,#ffffff_55%)] p-8 shadow-cloud-card lg:p-10"
          >
            <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-cloud-orange px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
              <Star size={11} fill="currentColor" strokeWidth={0} />
              Featured
            </span>
            <Quote
              size={42}
              strokeWidth={1.6}
              className="text-cloud-orange/40"
              aria-hidden="true"
            />
            <p className="mt-5 flex-1 text-lg font-bold leading-[1.6] text-cloud-navy lg:text-[22px] lg:leading-[1.5]">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="mt-7 flex items-center gap-4 border-t border-cloud-line pt-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cloud-orange to-cloud-orange-2 text-base font-black text-white shadow-cloud-orange">
                {featured.initials}
              </div>
              <div>
                <h3 className="text-base font-black text-cloud-navy">{featured.name}</h3>
                <p className="mt-0.5 text-xs font-semibold text-slate-500">{featured.role}</p>
                <div
                  className="mt-1.5 flex gap-0.5 text-cloud-orange"
                  aria-label="5 star rating"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-7">
            {others.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                {...fadeUp(0.12 + index * 0.06)}
                className="flex h-full flex-col rounded-2xl border border-cloud-line bg-white p-7 shadow-cloud-card transition duration-300 hover:-translate-y-1 hover:border-cloud-orange/30 hover:shadow-[0_30px_60px_rgba(15,24,48,0.1)]"
              >
                <div className="flex gap-1 text-cloud-orange" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm font-medium leading-7 text-slate-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-cloud-line pt-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cloud-navy text-xs font-black text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-cloud-navy">{testimonial.name}</h3>
                    <p className="mt-0.5 text-xs font-semibold text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
