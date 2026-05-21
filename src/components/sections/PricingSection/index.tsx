import { useState } from 'react'
import { BadgeCheck, RefreshCcw, Shield, Headphones } from 'lucide-react'
import { pricingPlans } from '@/data/pricing'
import type { BillingCycle } from '@/data/types'
import { containerClass } from '@/components/ui/container.styles'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { FadeFn } from '@/lib/motion'
import { BillingToggle } from './BillingToggle'
import { PricingCard } from './PricingCard'

type PricingSectionProps = {
  fadeUp: FadeFn
}

/**
 * Pricing section with billing cycle toggle (monthly/yearly) and 3 plan cards.
 * billingCycle state lives here (no prop drill from App).
 */
export function PricingSection({ fadeUp }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('yearly')

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8f0_0%,#ffffff_52%)] pb-20 pt-20 lg:pb-24 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cloud-orange/20 to-transparent"
      />
      <div className={containerClass}>
        <div className="grid items-end gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionLabel icon={BadgeCheck}>Paket Hosting</SectionLabel>
            <h2 className="mt-5 max-w-[520px] text-[32px] font-black leading-[1.14] tracking-hero text-cloud-navy sm:text-[42px]">
              Pilih Paket Hosting Sesuai Kebutuhanmu
            </h2>
            <p className="mt-5 max-w-[520px] text-base font-medium leading-7 text-slate-600">
              Semua paket sudah termasuk SSL gratis, backup harian, panel mudah digunakan, dan support
              responsif.
            </p>
          </div>
          <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billingCycle={billingCycle}
              index={index}
              fadeUp={fadeUp}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-cloud-line bg-white/60 px-6 py-5 text-sm font-bold text-cloud-navy backdrop-blur">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-cloud-orange">
              <Shield size={15} strokeWidth={2.6} />
            </span>
            Garansi 30 hari uang kembali
          </span>
          <span className="hidden h-4 w-px bg-cloud-line sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-cloud-orange">
              <RefreshCcw size={15} strokeWidth={2.6} />
            </span>
            Migrasi gratis tanpa downtime
          </span>
          <span className="hidden h-4 w-px bg-cloud-line sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-cloud-orange">
              <Headphones size={15} strokeWidth={2.6} />
            </span>
            Support Indonesia 24/7
          </span>
        </div>
      </div>
    </section>
  )
}
