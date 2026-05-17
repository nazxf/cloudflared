import { motion } from 'framer-motion'
import { BadgeCheck, Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { containerClass } from '@/components/ui/container.styles'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { FadeFn } from '@/lib/motion'

type TestimonialsSectionProps = {
  fadeUp: FadeFn
}

/**
 * 3-column testimonial cards with star rating, quote, and author profile.
 * Cards use equal-height flex layout with a divider above the author row.
 */
export function TestimonialsSection({ fadeUp }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-24">
      <div className={containerClass}>
        <motion.div {...fadeUp(0.02)} className="mx-auto max-w-[760px] text-center">
          <SectionLabel icon={BadgeCheck}>Testimoni</SectionLabel>
          <h2 className="mt-5 text-[32px] font-black leading-[1.15] tracking-hero text-cloud-navy sm:text-[44px]">
            Dipercaya oleh Ribuan Pelanggan di Seluruh Indonesia
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-[1080px] gap-7 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              {...fadeUp(index * 0.08)}
              className="flex h-full flex-col rounded-lg border border-cloud-line bg-white p-7 shadow-cloud-card transition duration-300 hover:-translate-y-1 hover:border-cloud-orange/30 hover:shadow-[0_28px_60px_rgba(15,24,48,0.12)]"
            >
              <div className="flex gap-1 text-cloud-orange" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={17} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm font-medium leading-7 text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-cloud-line pt-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cloud-navy text-sm font-black text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="text-sm font-black text-cloud-navy">{testimonial.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
