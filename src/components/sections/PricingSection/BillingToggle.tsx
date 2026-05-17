import { motion } from 'framer-motion'
import { cycleOptions } from '@/data/pricing'
import type { BillingCycle } from '@/data/types'
import { springs } from '@/lib/motion'

type BillingToggleProps = {
  billingCycle: BillingCycle
  onChange: (cycle: BillingCycle) => void
}

/**
 * Segmented toggle between Bulanan and Tahunan with sliding pill (layoutId animation).
 * Active hint badge ("Hemat 20%") swaps colors during transition.
 */
export function BillingToggle({ billingCycle, onChange }: BillingToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Siklus pembayaran"
      className="relative inline-flex gap-1 self-start rounded-lg border border-cloud-line bg-white p-1.5 shadow-[0_12px_28px_rgba(16,24,40,0.06)] lg:justify-self-end"
    >
      {cycleOptions.map((option) => {
        const isActive = billingCycle === option.id
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className="relative inline-flex min-h-10 items-center gap-2 rounded-md px-4 text-sm font-extrabold transition-colors duration-200 focus-visible:outline-none"
          >
            {isActive && (
              <motion.span
                layoutId="billing-cycle-pill"
                aria-hidden="true"
                className="absolute inset-0 rounded-md bg-cloud-orange shadow-[0_10px_24px_rgba(255,106,0,0.28)]"
                transition={springs.snappy}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-cloud-navy'
              }`}
            >
              {option.label}
            </span>
            {option.hint && (
              <span
                className={`relative z-10 rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wide transition-colors duration-200 ${
                  isActive ? 'bg-white/25 text-white' : 'bg-orange-50 text-cloud-orange'
                }`}
              >
                {option.hint}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
