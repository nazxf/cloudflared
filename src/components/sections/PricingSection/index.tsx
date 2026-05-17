import { useState } from 'react'
import { BadgeCheck } from 'lucide-react'
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
      className="relative bg-[linear-gradient(180deg,#fff8f0_0%,#ffffff_52%)] pb-20 pt-20 lg:pb-24 lg:pt-24"
    >
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

        <div className="mt-10 grid gap-7 lg:grid-cols-3 lg:items-stretch">
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
      </div>
    </section>
  )
}
