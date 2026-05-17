import {
  CircleGauge,
  Cloud,
  Clock3,
  Globe2,
  Headphones,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import type { HeroFeature, IconText } from './types'

export const trustBadges: IconText[] = [
  {
    icon: Clock3,
    title: 'Uptime 99.9%',
    description: 'Jaminan ketersediaan',
  },
  {
    icon: LockKeyhole,
    title: 'SSL Gratis',
    description: 'Keamanan data terjamin',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Siap membantu kapan saja',
  },
]

export const heroStats: IconText[] = [
  {
    icon: UsersRound,
    title: '15K+',
    description: 'Pelanggan Aktif',
  },
  {
    icon: Globe2,
    title: '30+',
    description: 'Lokasi Server',
  },
  {
    icon: Rocket,
    title: '1.2s',
    description: 'Rata-rata Load Time',
  },
  {
    icon: ShieldCheck,
    title: '99.9%',
    description: 'Uptime Terjamin',
  },
]

export const heroFeature: HeroFeature = {
  icon: CircleGauge,
  eyebrow: 'Stack Performa',
  title: 'NVMe SSD + LiteSpeed Web Server',
  description:
    'Storage NVMe membaca data hingga 6x lebih cepat dari SSD biasa. LiteSpeed melayani request PHP & static asset jauh lebih efisien dari Apache. Hasil: Time to First Byte rendah, halaman terbuka di bawah 1.5 detik.',
  metrics: [
    { label: 'Average TTFB', value: '180ms' },
    { label: 'Page load', value: '1.2s' },
    { label: 'Concurrent req', value: '10K+' },
  ],
}

export const features: IconText[] = [
  {
    icon: ShieldCheck,
    title: 'Keamanan Berlapis',
    description: 'SSL gratis, firewall, backup harian, dan proteksi DDoS aktif sejak awal.',
  },
  {
    icon: Cloud,
    title: 'Cloud Stabil',
    description: 'Infrastruktur cloud modern dengan monitoring real-time untuk kestabilan layanan.',
  },
  {
    icon: Headphones,
    title: 'Bantuan Responsif',
    description: 'Tim support siap membantu migrasi, setup domain, dan optimasi website Anda.',
  },
]
