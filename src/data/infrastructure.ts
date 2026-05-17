import { Globe2, LockKeyhole, Server } from 'lucide-react'
import type { IconText } from './types'

export const infrastructureBenefits: IconText[] = [
  {
    icon: Server,
    title: 'Server NVMe SSD',
    description: 'Waktu baca/tulis lebih cepat untuk website, toko online, dan aplikasi bisnis.',
  },
  {
    icon: Globe2,
    title: 'Jaringan Global',
    description: 'Koneksi stabil dari beberapa lokasi server strategis untuk pengunjung Indonesia.',
  },
  {
    icon: LockKeyhole,
    title: 'Proteksi Aktif',
    description: 'Monitoring, SSL, firewall, dan perlindungan DDoS bekerja sepanjang waktu.',
  },
]
