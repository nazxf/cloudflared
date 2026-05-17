import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Star } from 'lucide-react'
import { computeYearlyMonthly } from '@/data/pricing'
import type { BillingCycle, PricingPlan } from '@/data/types'
import { formatRupiah } from '@/lib/format'
import { softEase, type FadeFn } from '@/lib/motion'

type PricingCardProps = {
  plan: PricingPlan
  billingCycle: BillingCycle
  index: number
  fadeUp: FadeFn
}

/**
 * Single pricing plan card with featured top badge, animated price flip on cycle change,
 * and CTA. Yearly billing uses computeYearlyMonthly for the displayed monthly price.
 */
export function PricingCard({ plan, billingCycle, index, fadeUp }: PricingCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const flipDistance = shouldReduceMotion ? 0 : 22

  const monthly = plan.monthlyPrice
  const yearlyMonthlyEquivalent = computeYearlyMonthly(monthly)
  const displayPrice = billingCycle === 'yearly' ? yearlyMonthlyEquivalent : monthly
  const billedNote =
    billingCycle === 'yearly'
      ? `Ditagih Rp ${formatRupiah(displayPrice * 12)}/tahun`
      : 'Ditagih bulanan'

  return (
    <motion.article
      {...fadeUp(index * 0.08)}
      className={`group relative flex flex-col overflow-hidden rounded-lg border bg-white p-7 shadow-cloud-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,24,48,0.12)] ${
        plan.featured
          ? 'border-cloud-orange ring-1 ring-cloud-orange/25 lg:-my-2 lg:py-9'
          : 'border-cloud-line'
      }`}
    >
      {plan.featured && (
        <div className="absolute left-0 right-0 top-0 flex items-center justify-center gap-1.5 bg-cloud-orange py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white">
          <Star size={11} fill="currentColor" strokeWidth={0} />
          Paling Populer
        </div>
      )}
      <div className={plan.featured ? 'pt-8' : ''}>
        <h3 className="text-2xl font-black text-cloud-navy">{plan.name}</h3>
        <p className="mt-3 min-h-12 text-sm font-medium leading-6 text-slate-500">
          {plan.description}
        </p>
        <div className="mt-7 flex items-end gap-1">
          <span className="text-xs font-extrabold text-cloud-navy">Rp</span>
          <div className="relative h-9 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.span
                key={billingCycle}
                initial={{ y: flipDistance, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -flipDistance, opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: softEase }}
                className="absolute inset-0 block whitespace-nowrap text-3xl font-black leading-none text-cloud-orange tabular-nums"
              >
                {formatRupiah(displayPrice)}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="pb-1 text-sm font-bold text-slate-500">/bulan</span>
        </div>
        <div className="mt-2 h-4 overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.p
              key={billedNote}
              initial={{ y: shouldReduceMotion ? 0 : 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: shouldReduceMotion ? 0 : -8, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: softEase }}
              className="text-xs font-semibold text-slate-500"
            >
              {billedNote}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <ul className="mt-7 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm font-bold text-cloud-navy">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-cloud-orange">
              <Check size={13} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#home"
        className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border text-sm font-black transition ${
          plan.featured
            ? 'border-cloud-orange bg-cloud-orange text-white shadow-cloud-orange hover:bg-cloud-orange-2'
            : 'border-cloud-line bg-white text-cloud-navy hover:border-cloud-orange hover:text-cloud-orange'
        }`}
      >
        Pilih Paket
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </a>
    </motion.article>
  )
}
