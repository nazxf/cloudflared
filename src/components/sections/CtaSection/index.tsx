import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, CreditCard, Timer } from 'lucide-react'
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
          className="cta-pattern relative overflow-hidden rounded-2xl px-7 py-10 text-white shadow-[0_28px_70px_rgba(255,106,0,0.26)] sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-14"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 320 240"
            className="pointer-events-none absolute -right-10 -top-10 hidden h-[280px] w-[340px] text-white/12 lg:block"
          >
            <defs>
              <linearGradient id="cta-cloud" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.22" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M70 150 Q40 150 38 122 Q40 95 70 95 Q72 70 100 70 Q126 60 144 80 Q170 60 196 80 Q230 78 232 110 Q260 116 258 142 Q256 166 230 168 L80 168 Q56 168 70 150 Z"
              fill="url(#cta-cloud)"
              stroke="rgba(255,255,255,0.32)"
              strokeWidth="1.4"
            />
            <circle cx="262" cy="46" r="4" fill="white" opacity="0.4" />
            <circle cx="288" cy="74" r="2.5" fill="white" opacity="0.25" />
            <circle cx="56" cy="56" r="3" fill="white" opacity="0.3" />
          </svg>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-white backdrop-blur">
              <Timer size={12} strokeWidth={2.6} />
              Setup dalam 5 menit
            </span>
            <h2 className="mt-4 max-w-[560px] text-[30px] font-black leading-[1.16] sm:text-[40px]">
              Siap Membangun Website Anda?
            </h2>
            <p className="mt-4 max-w-[560px] text-sm font-semibold leading-7 text-white/90 sm:text-base">
              Bergabung sekarang dan rasakan performa hosting terbaik bersama CloudFlared.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/85">
              <CreditCard size={15} />
              Tanpa kartu kredit untuk demo
            </p>
          </div>
          <div className="relative z-10 mt-8 lg:mt-0 lg:flex-none">
            <a
              href="#pricing"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-white px-8 text-base font-black text-cloud-orange shadow-[0_18px_36px_rgba(16,24,40,0.18)] transition hover:-translate-y-0.5 hover:bg-white/95"
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
