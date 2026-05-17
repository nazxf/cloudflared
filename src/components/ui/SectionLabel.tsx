import type { LucideIcon } from 'lucide-react'

type SectionLabelProps = {
  icon: LucideIcon
  children: string
}

/**
 * Pill-shaped eyebrow label used at the top of marketing sections.
 */
export function SectionLabel({ icon: Icon, children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-black text-cloud-orange">
      <Icon size={15} />
      {children}
    </span>
  )
}
