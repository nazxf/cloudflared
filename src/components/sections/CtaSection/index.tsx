import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { containerClass } from '@/components/ui/container.styles'
import type { FadeFn } from '@/lib/motion'
import './Cta.css'

type CtaSectionProps = {
  fadeUp: FadeFn
}

/**
 * Full-width orange CTA card that straddles the white/navy section seam.
 * Background uses a split gradient so the card sits on the transition.
 */
export function CtaSection({ fadeUp }: CtaSectionProps) {
  return (
    <section
      id="support"
      className="relative bg-[linear-gradient(180deg,#fff8f0_0%,#fff8f0_55%,#0a1422_55%,#0a1422_100%)] pt-20 lg:pt-24"
    >
      <div className={containerClass}>
        <motion.div
          {...fadeUp(0.02)}
          className="cta-pattern relative overflow-hidden rounded-lg px-7 py-10 text-white shadow-[0_28px_70px_rgba(255,106,0,0.26)] sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14"
        >
          <div className="relative z-10">
            <h2 className="max-w-[540px] text-[30px] font-black leading-[1.16] sm:text-[40px]">
              Siap Membangun Website Anda?
            </h2>
            <p className="mt-4 max-w-[560px] text-sm font-semibold leading-7 text-white/90 sm:text-base">
              Bergabung sekarang dan rasakan performa hosting terbaik bersama CloudFlared.
            </p>
          </div>
          <div className="relative z-10 mt-8 lg:mt-0 lg:flex-none">
            <a
              href="#pricing"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-white px-8 text-base font-black text-cloud-orange shadow-[0_18px_36px_rgba(16,24,40,0.18)] transition hover:-translate-y-0.5"
            >
              Mulai Sekarang
              <ArrowRight size={19} />
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 size={16} />
              30-Day Money Back Guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
