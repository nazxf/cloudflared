import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Headphones, Minus, Plus } from 'lucide-react'
import { faqItems } from '@/data/faq'
import { containerClass } from '@/components/ui/container.styles'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { softEase, type FadeFn } from '@/lib/motion'

type FaqSectionProps = {
  fadeUp: FadeFn
}

/**
 * Two-column FAQ section: intro + support CTA on the left, accordion on the right.
 * First item open by default. Accordion animates height via framer-motion.
 */
export function FaqSection({ fadeUp }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#fff8f0_100%)] py-20 lg:py-24"
    >
      <div className={containerClass}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div {...fadeUp(0.02)}>
            <SectionLabel icon={Headphones}>Pertanyaan Umum</SectionLabel>
            <h2 className="mt-5 text-[32px] font-black leading-[1.14] tracking-hero text-cloud-navy sm:text-[42px]">
              Hal yang Sering Ditanyakan Sebelum Mulai
            </h2>
            <p className="mt-5 max-w-[440px] text-base font-medium leading-7 text-slate-600">
              Tidak ketemu jawabannya? Tim kami online 24/7 lewat live chat dan WhatsApp untuk bantu
              langsung.
            </p>
            <a
              href="#support"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg border border-cloud-line bg-white px-5 text-sm font-extrabold text-cloud-navy shadow-[0_12px_28px_rgba(16,24,40,0.06)] transition hover:border-cloud-orange/45 hover:text-cloud-orange"
            >
              Hubungi Support
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.08)} className="grid gap-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-lg border bg-white transition ${
                    isOpen
                      ? 'border-cloud-orange/40 shadow-[0_18px_44px_rgba(255,95,0,0.1)]'
                      : 'border-cloud-line shadow-[0_8px_22px_rgba(15,24,48,0.04)] hover:border-cloud-orange/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left lg:px-6 lg:py-5"
                  >
                    <span className="text-[15px] font-black text-cloud-navy lg:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-full transition ${
                        isOpen ? 'bg-cloud-orange text-white' : 'bg-orange-50 text-cloud-orange'
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} strokeWidth={3} />
                      ) : (
                        <Plus size={16} strokeWidth={3} />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.28, ease: softEase }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm font-medium leading-7 text-slate-600 lg:px-6 lg:pb-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
