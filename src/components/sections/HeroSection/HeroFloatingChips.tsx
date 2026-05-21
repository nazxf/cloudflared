import { motion } from 'framer-motion'
import { Activity, LockKeyhole, MapPin, Zap } from 'lucide-react'
import { floatEase } from '@/lib/motion'

type HeroFloatingChipsProps = {
  reduceMotion: boolean
}

/**
 * Floating info chips around the hero illustration:
 * SSL active, uptime sparkline, routed-via location, and a TTFB pill.
 * Each pill bobs with a staggered delay; respect reduced motion.
 */
export function HeroFloatingChips({ reduceMotion }: HeroFloatingChipsProps) {
  const float = (delay: number) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -8, 0] },
          transition: { duration: 6, delay, repeat: Infinity, ease: floatEase },
        }

  return (
    <>
      <motion.div
        {...float(0)}
        className="pointer-events-none absolute left-2 top-12 z-20 hidden items-center gap-2.5 rounded-full border border-cloud-line bg-white/95 px-3.5 py-2 shadow-[0_18px_36px_rgba(15,24,48,0.12)] backdrop-blur sm:inline-flex"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <LockKeyhole size={15} strokeWidth={2.6} />
        </span>
        <div className="text-left">
          <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">SSL</div>
          <div className="text-sm font-black text-cloud-navy">Active &amp; Encrypted</div>
        </div>
      </motion.div>

      <motion.div
        {...float(1.2)}
        className="pointer-events-none absolute right-0 top-4 z-20 hidden items-center gap-3 rounded-md border border-cloud-line bg-white/95 px-4 py-2.5 shadow-[0_18px_36px_rgba(15,24,48,0.12)] backdrop-blur sm:inline-flex"
      >
        <div className="text-left">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
            <Activity size={12} className="text-cloud-orange" />
            Uptime 30d
          </div>
          <div className="mt-0.5 text-sm font-black tabular-nums text-cloud-navy">99.97%</div>
        </div>
        <svg viewBox="0 0 56 22" className="h-5 w-14" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 16 L8 14 L16 18 L24 8 L32 12 L40 5 L48 9 L56 3"
            fill="none"
            stroke="#ff5f00"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        {...float(2.1)}
        className="pointer-events-none absolute bottom-6 left-4 z-20 hidden items-center gap-2.5 rounded-full border border-cloud-line bg-white/95 px-3.5 py-2 shadow-[0_18px_36px_rgba(15,24,48,0.12)] backdrop-blur sm:inline-flex"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-cloud-orange">
          <MapPin size={15} strokeWidth={2.6} />
        </span>
        <div className="text-left">
          <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Routed via</div>
          <div className="text-sm font-black text-cloud-navy">Jakarta · 14ms</div>
        </div>
      </motion.div>

      <motion.div
        {...float(0.6)}
        className="pointer-events-none absolute -right-2 bottom-20 z-20 hidden items-center gap-2.5 rounded-full border border-orange-100 bg-gradient-to-r from-cloud-orange to-cloud-orange-2 px-3.5 py-2 shadow-[0_18px_36px_rgba(255,95,0,0.28)] sm:inline-flex"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
          <Zap size={15} fill="currentColor" strokeWidth={0} />
        </span>
        <div className="text-left text-white">
          <div className="text-[11px] font-bold uppercase tracking-wide text-white/80">TTFB</div>
          <div className="text-sm font-black tabular-nums">180ms avg</div>
        </div>
      </motion.div>
    </>
  )
}
