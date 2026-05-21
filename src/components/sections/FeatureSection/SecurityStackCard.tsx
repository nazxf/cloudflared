import { motion } from 'framer-motion'
import { ShieldHalf } from 'lucide-react'
import { securityStack } from '@/data/features'
import type { FadeFn } from '@/lib/motion'

type SecurityStackCardProps = {
  fadeUp: FadeFn
  delay?: number
}

/**
 * Compact security stack card highlighting SSL, WAF, DDoS, and backup as a stack.
 * Used in the FeatureSection bento layout (right column top row).
 */
export function SecurityStackCard({ fadeUp, delay = 0.1 }: SecurityStackCardProps) {
  return (
    <motion.article
      {...fadeUp(delay)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-cloud-line bg-gradient-to-br from-[#0f1830] via-[#131e3d] to-[#0f1830] p-7 text-white shadow-[0_22px_60px_rgba(15,24,48,0.18)] transition duration-300 hover:-translate-y-1"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-cloud-orange/25 blur-3xl"
      />
      <div className="relative flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur">
          <ShieldHalf size={22} strokeWidth={2.4} />
        </span>
        <div>
          <span className="block text-[11px] font-black uppercase tracking-[0.14em] text-cloud-orange">
            Keamanan Berlapis
          </span>
          <h3 className="mt-1 text-xl font-black leading-tight">Security Stack</h3>
        </div>
      </div>

      <p className="relative mt-4 text-sm font-medium leading-7 text-white/70">
        Empat lapis pertahanan aktif sejak hari pertama, tanpa setup tambahan.
      </p>

      <div className="relative mt-5 grid grid-cols-2 gap-2.5">
        {securityStack.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur transition group-hover:border-cloud-orange/40"
            >
              <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-cloud-orange/15 text-cloud-orange">
                <Icon size={15} strokeWidth={2.6} />
              </span>
              <div className="min-w-0">
                <div className="truncate text-[12px] font-black leading-tight text-white">
                  {item.label}
                </div>
                <div className="mt-0.5 truncate text-[10px] font-semibold text-white/60">
                  {item.detail}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.article>
  )
}
