import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
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
  const flipDistance = shouldReduceMotion ? 0 : 20

  const monthly = plan.monthlyPrice
  const yearlyMonthlyEquivalent = computeYearlyMonthly(monthly)
  const displayPrice = billingCycle === 'yearly' ? yearlyMonthlyEquivalent : monthly
  const billedNote =
    billingCycle === 'yearly'
      ? `Ditagih Rp ${formatRupiah(displayPrice * 12)} per tahun`
      : 'Ditagih bulanan, batal kapan saja'
  const showSavingsTag = billingCycle === 'yearly'
  const monthlySavings = monthly - yearlyMonthlyEquivalent

  return (
    <motion.article
      {...fadeUp(index * 0.08)}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white p-7 shadow-cloud-card transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_36px_80px_rgba(15,24,48,0.14)] ${
        plan.featured
          ? 'border-cloud-orange/70 ring-1 ring-cloud-orange/20 lg:-my-3 lg:py-9'
          : 'border-cloud-line hover:border-cloud-orange/40'
      }`}
    >
      {plan.featured && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,95,0,0.12),transparent_55%)]"
          />
          <div className="absolute left-0 right-0 top-0 flex items-center justify-center gap-1.5 bg-gradient-to-r from-cloud-orange to-cloud-orange-2 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-white">
            <Sparkles size={12} strokeWidth={2.5} />
            Paling Populer
          </div>
        </>
      )}

      <div className={`relative ${plan.featured ? 'pt-9' : ''}`}>
        <h3 className="text-2xl font-black text-cloud-navy">{plan.name}</h3>
        <p className="mt-3 min-h-12 text-sm font-medium leading-6 text-slate-500">
          {plan.description}
        </p>

        <div className="mt-7 flex items-baseline gap-1.5">
          <span className="text-base font-extrabold text-cloud-navy/70">Rp</span>
          <div className="relative inline-grid">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                key={billingCycle}
                initial={{ y: flipDistance, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -flipDistance, opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: softEase }}
                className="col-start-1 row-start-1 whitespace-nowrap text-[40px] font-black leading-none tracking-tight text-cloud-navy tabular-nums"
              >
                {formatRupiah(displayPrice)}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-sm font-bold text-slate-400">/bulan</span>
        </div>

        <div className="mt-2 flex min-h-5 items-center gap-2">
          <AnimatePresence initial={false} mode="wait">
            <motion.p
              key={billedNote}
              initial={{ y: shouldReduceMotion ? 0 : 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: shouldReduceMotion ? 0 : -6, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: softEase }}
              className="text-xs font-semibold text-slate-500"
            >
              {billedNote}
            </motion.p>
          </AnimatePresence>
          {showSavingsTag && monthlySavings > 0 && (
            <motion.span
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: softEase, delay: 0.05 }}
              className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-cloud-orange"
            >
              Hemat Rp {formatRupiah(monthlySavings)}
            </motion.span>
          )}
        </div>
      </div>

      <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-cloud-line to-transparent" />

      <ul className="space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-cloud-navy">
            <span
              className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.featured ? 'bg-cloud-orange text-white' : 'bg-orange-50 text-cloud-orange'
              }`}
            >
              <Check size={13} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#home"
        className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border text-sm font-black transition ${
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
