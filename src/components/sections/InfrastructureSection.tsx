import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import infrastructureCloudGlobe from '@/assets/infrastructure-cloud-globe.png'
import { infrastructureBenefits } from '@/data/infrastructure'
import { containerClass } from '@/components/ui/container.styles'
import { IconBadge } from '@/components/ui/IconBadge'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { FadeFn } from '@/lib/motion'

type InfrastructureSectionProps = {
  fadeUp: FadeFn
  floatingMotion: object
}

/**
 * Two-column infrastructure section: copy + benefits list on the left,
 * floating cloud globe illustration on the right.
 */
export function InfrastructureSection({ fadeUp, floatingMotion }: InfrastructureSectionProps) {
  return (
    <section className="bg-[#fff2e8] py-20 lg:py-24">
      <div className={`${containerClass} grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]`}>
        <motion.div {...fadeUp(0.02)}>
          <SectionLabel icon={BadgeCheck}>Infrastruktur Premium</SectionLabel>
          <h2 className="mt-5 max-w-[540px] text-[32px] font-black leading-[1.15] tracking-hero text-cloud-navy sm:text-[44px]">
            Ditenagai Infrastruktur Kelas Dunia
          </h2>
          <p className="mt-6 max-w-[510px] text-base font-medium leading-8 text-slate-600">
            CloudFlared menggunakan teknologi enterprise dan data center modern untuk memastikan
            website Anda cepat, stabil, dan aman.
          </p>

          <div className="mt-9 grid gap-5">
            {infrastructureBenefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <IconBadge
                  icon={benefit.icon}
                  variant="soft"
                  size="md"
                  iconSize={23}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-black text-cloud-navy">{benefit.title}</h3>
                  <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.08)} className="relative">
          <motion.img
            {...floatingMotion}
            src={infrastructureCloudGlobe}
            alt="Ilustrasi infrastruktur cloud global"
            className="mx-auto w-full max-w-[790px] drop-shadow-[0_34px_60px_rgba(255,106,0,0.16)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
