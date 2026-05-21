import type { LucideIcon } from 'lucide-react'
import { Headphones, Rocket, Settings2, ShieldCheck, Wallet } from 'lucide-react'

export type ComparisonRow = {
  icon: LucideIcon
  label: string
  cloudflared: string
  generic: string
  vps: string
}

export const comparisonRows: ComparisonRow[] = [
  {
    icon: Settings2,
    label: 'Setup',
    cloudflared: '5 menit · panel siap pakai',
    generic: 'Konfigurasi manual',
    vps: 'Setup OS sendiri',
  },
  {
    icon: Rocket,
    label: 'Performance',
    cloudflared: 'NVMe + LiteSpeed default',
    generic: 'SSD biasa, Apache',
    vps: 'Optimasi sendiri',
  },
  {
    icon: ShieldCheck,
    label: 'Security',
    cloudflared: 'WAF, SSL, anti-DDoS aktif',
    generic: 'Tambahan berbayar',
    vps: 'Hardening manual',
  },
  {
    icon: Headphones,
    label: 'Support',
    cloudflared: 'Indonesia 24/7',
    generic: 'Email business hours',
    vps: 'Tidak tersedia',
  },
  {
    icon: Wallet,
    label: 'Total Biaya',
    cloudflared: 'Mulai Rp 19.000/bulan',
    generic: 'Hidden cost addons',
    vps: 'Sewa server + maintenance',
  },
]
