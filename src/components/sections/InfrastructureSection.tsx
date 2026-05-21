import { motion } from 'framer-motion'
import { Activity, BadgeCheck, Headphones, Server } from 'lucide-react'
import infrastructureCloudGlobe from '@/assets/infrastructure-cloud-globe.png'
import { infrastructureBenefits } from '@/data/infrastructure'
import { containerClass } from '@/components/ui/container.styles'
import { CountUpNumber } from '@/components/ui/CountUpNumber'
import { IconBadge } from '@/components/ui/IconBadge'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { FadeFn } from '@/lib/motion'

type InfrastructureSectionProps = {
  fadeUp: FadeFn
  floatingMotion: object
}

type DataCenter = {
  city: string
  latency: string
  /** Coordinates in % relative to the globe image. */
  x: number
  y: number
}

const dataCenters: DataCenter[] = [
  { city: 'Jakarta', latency: '12ms', x: 71, y: 62 },
  { city: 'Singapore', latency: '18ms', x: 68, y: 56 },
  { city: 'Tokyo', latency: '46ms', x: 84, y: 38 },
  { city: 'Frankfurt', latency: '180ms', x: 50, y: 30 },
  { city: 'Virginia', latency: '220ms', x: 24, y: 38 },
  { city: 'Sao Paulo', latency: '320ms', x: 32, y: 72 },
]

type InfraStat = {
  icon: typeof Server
  value: number
  decimals?: number
  suffix?: string
  label: string
}

const infraStats: InfraStat[] = [
  { icon: Server, value: 28, suffix: '+', label: 'Data Center' },
  { icon: BadgeCheck, value: 12, suffix: '', label: 'Region Aktif' },
  { icon: Activity, value: 99.9, decimals: 1, suffix: '%', label: 'SLA Uptime' },
  { icon: Headphones, value: 24, suffix: '/7', label: 'NOC Monitoring' },
]

/**
 * Two-column infrastructure section: copy + benefits + stats strip on the left,
 * floating cloud globe with data-center dot overlay on the right.
 */
export function InfrastructureSection({ fadeUp, floatingMotion }: InfrastructureSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#fff2e8] py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cloud-orange/20 to-transparent"
      />
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

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {infraStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-cloud-line/80 bg-white/80 px-4 py-3 backdrop-blur"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-cloud-orange">
                    <Icon size={16} strokeWidth={2.6} />
                  </span>
                  <div className="mt-2.5 text-xl font-black leading-none text-cloud-navy tabular-nums">
                    <CountUpNumber
                      value={stat.value}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix ?? ''}
                    />
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>

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
          <div className="pointer-events-none absolute inset-0">
            {dataCenters.map((dc, index) => (
              <span
                key={dc.city}
                className="group/dc pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${dc.x}%`, top: `${dc.y}%` }}
              >
                <span className="relative inline-flex h-3 w-3">
                  <span
                    className="absolute inset-0 animate-ping rounded-full bg-cloud-orange/55"
                    style={{ animationDelay: `${index * 0.4}s` }}
                  />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cloud-orange shadow-[0_0_0_4px_rgba(255,95,0,0.18)]" />
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-cloud-line bg-white px-2.5 py-1 text-[11px] font-black text-cloud-navy shadow-[0_10px_24px_rgba(15,24,48,0.12)] group-hover/dc:block">
                  {dc.city}
                  <span className="ml-1.5 text-cloud-orange tabular-nums">{dc.latency}</span>
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
