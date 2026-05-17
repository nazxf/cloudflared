import type { CycleOption, PricingPlan } from './types'

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Cocok untuk website pribadi dan project baru.',
    monthlyPrice: 19000,
    features: ['1 Website', '10 GB NVMe SSD', 'SSL Gratis', 'Backup Harian', 'Support Standar'],
  },
  {
    name: 'Business',
    description: 'Paling pas untuk bisnis yang sedang berkembang.',
    monthlyPrice: 49000,
    featured: true,
    features: [
      'Unlimited Website',
      '30 GB NVMe SSD',
      'Gratis SSL & Domain',
      'LiteSpeed Web Server',
      'Priority Support',
    ],
  },
  {
    name: 'Pro',
    description: 'Performa maksimal untuk traffic tinggi.',
    monthlyPrice: 99000,
    features: ['Unlimited Website', '80 GB NVMe SSD', 'Gratis SSL & Domain', 'Backup Harian', 'Priority Support'],
  },
]

export const cycleOptions: CycleOption[] = [
  { id: 'monthly', label: 'Bulanan' },
  { id: 'yearly', label: 'Tahunan', hint: 'Hemat 20%' },
]

/**
 * Yearly equivalent monthly price (20% off, rounded to nearest 1000).
 */
export const computeYearlyMonthly = (monthlyPrice: number): number =>
  Math.round((monthlyPrice * 0.8) / 1000) * 1000
