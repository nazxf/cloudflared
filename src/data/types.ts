import type { LucideIcon } from 'lucide-react'

export type NavLink = {
  label: string
  href: string
  id: string
}

export type IconText = {
  icon: LucideIcon
  title: string
  description: string
}

export type FeatureMetric = {
  label: string
  value: string
}

export type HeroFeature = {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  metrics: FeatureMetric[]
}

export type PricingPlan = {
  name: string
  description: string
  monthlyPrice: number
  features: string[]
  featured?: boolean
}

export type BillingCycle = 'monthly' | 'yearly'

export type CycleOption = {
  id: BillingCycle
  label: string
  hint?: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type FooterColumn = {
  title: string
  links: string[]
}
