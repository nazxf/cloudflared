import { motion } from 'framer-motion'
import { Check, Minus, Scale } from 'lucide-react'
import { comparisonRows } from '@/data/comparison'
import { containerClass } from '@/components/ui/container.styles'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { FadeFn } from '@/lib/motion'

type ComparisonSectionProps = {
  fadeUp: FadeFn
}

const columns = [
  { id: 'cloudflared', label: 'CloudFlared', highlight: true },
  { id: 'generic', label: 'Hosting Konvensional', highlight: false },
  { id: 'vps', label: 'VPS DIY', highlight: false },
] as const

/**
 * Comparison table contrasting CloudFlared with conventional shared hosting and DIY VPS.
 * Highlights CloudFlared column with orange accent + Check icons; muted columns use Minus.
 * Mobile renders stacked card per row to remain scannable.
 */
export function ComparisonSection({ fadeUp }: ComparisonSectionProps) {
  return (
    <section id="why" className="section-edge-top relative bg-white py-20 lg:py-24">
      <div className={containerClass}>
        <motion.div {...fadeUp(0.02)} className="mx-auto max-w-[760px] text-center">
          <SectionLabel icon={Scale}>Mengapa CloudFlared</SectionLabel>
          <h2 className="mt-5 text-[32px] font-black leading-[1.14] tracking-hero text-cloud-navy sm:text-[42px]">
            Perbandingan Singkat: Apa Bedanya CloudFlared?
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-slate-600">
            Bandingkan dengan hosting konvensional dan VPS DIY. Lihat di mana waktu, biaya, dan
            risiko bisa kamu hemat.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.08)}
          className="mt-12 hidden overflow-hidden rounded-2xl border border-cloud-line bg-white shadow-cloud-card lg:block"
        >
          <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr] border-b border-cloud-line bg-[linear-gradient(180deg,#fff8f0,#ffffff)]">
            <div className="px-6 py-5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-500">
              Aspek
            </div>
            {columns.map((col) => (
              <div
                key={col.id}
                className={`relative px-6 py-5 text-sm font-black ${
                  col.highlight ? 'text-cloud-orange' : 'text-cloud-navy'
                }`}
              >
                {col.highlight && (
                  <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cloud-orange to-cloud-orange-2" />
                )}
                <div className="flex items-center gap-2">
                  {col.label}
                  {col.highlight && (
                    <span className="rounded-full bg-cloud-orange px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white">
                      Pilihan kami
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {comparisonRows.map((row, rowIndex) => {
            const Icon = row.icon
            const isLast = rowIndex === comparisonRows.length - 1
            return (
              <div
                key={row.label}
                className={`grid grid-cols-[1.1fr_1fr_1fr_1fr] ${
                  isLast ? '' : 'border-b border-cloud-line'
                }`}
              >
                <div className="flex items-center gap-3 px-6 py-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-cloud-orange">
                    <Icon size={17} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-black text-cloud-navy">{row.label}</span>
                </div>
                <div className="flex items-center gap-2 bg-[linear-gradient(180deg,rgba(255,95,0,0.04),transparent)] px-6 py-5 text-sm font-bold text-cloud-navy">
                  <Check
                    size={16}
                    strokeWidth={3}
                    className="flex-none rounded-full bg-cloud-orange p-0.5 text-white"
                  />
                  {row.cloudflared}
                </div>
                <div className="flex items-center gap-2 px-6 py-5 text-sm font-medium text-slate-500">
                  <Minus size={16} strokeWidth={2.5} className="flex-none text-slate-300" />
                  {row.generic}
                </div>
                <div className="flex items-center gap-2 px-6 py-5 text-sm font-medium text-slate-500">
                  <Minus size={16} strokeWidth={2.5} className="flex-none text-slate-300" />
                  {row.vps}
                </div>
              </div>
            )
          })}
        </motion.div>

        <div className="mt-10 grid gap-4 lg:hidden">
          {comparisonRows.map((row, index) => {
            const Icon = row.icon
            return (
              <motion.div
                key={row.label}
                {...fadeUp(0.04 + index * 0.05)}
                className="rounded-2xl border border-cloud-line bg-white p-5 shadow-[0_18px_45px_rgba(16,24,40,0.05)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-cloud-orange">
                    <Icon size={17} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-black text-cloud-navy">{row.label}</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-[13px]">
                  <li className="flex items-start gap-2 rounded-lg bg-[linear-gradient(180deg,rgba(255,95,0,0.06),transparent)] px-3 py-2 font-bold text-cloud-navy">
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="mt-0.5 flex-none rounded-full bg-cloud-orange p-0.5 text-white"
                    />
                    <span>
                      <span className="block text-[10px] font-black uppercase tracking-wide text-cloud-orange">
                        CloudFlared
                      </span>
                      {row.cloudflared}
                    </span>
                  </li>
                  <li className="flex items-start gap-2 px-3 py-1.5 font-medium text-slate-500">
                    <Minus size={14} className="mt-0.5 flex-none text-slate-300" />
                    <span>
                      <span className="block text-[10px] font-black uppercase tracking-wide text-slate-400">
                        Hosting Konvensional
                      </span>
                      {row.generic}
                    </span>
                  </li>
                  <li className="flex items-start gap-2 px-3 py-1.5 font-medium text-slate-500">
                    <Minus size={14} className="mt-0.5 flex-none text-slate-300" />
                    <span>
                      <span className="block text-[10px] font-black uppercase tracking-wide text-slate-400">
                        VPS DIY
                      </span>
                      {row.vps}
                    </span>
                  </li>
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
