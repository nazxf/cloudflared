import type { FaqItem } from './types'

export const faqItems: FaqItem[] = [
  {
    question: 'Berapa lama proses migrasi dari hosting lama?',
    answer:
      'Tim kami memindahkan website Anda gratis dalam 24 jam, termasuk database, email, dan konfigurasi DNS. Tidak ada downtime selama proses migrasi karena kami sinkronkan dulu sebelum cutover.',
  },
  {
    question: 'Apakah ada garansi uang kembali?',
    answer:
      '30 hari tanpa pertanyaan. Jika layanan tidak sesuai harapan, kami refund 100% lewat transfer bank atau e-wallet dalam 3 hari kerja.',
  },
  {
    question: 'Domain gratis berlaku untuk berapa lama?',
    answer:
      'Domain .com, .net, atau .id gratis 1 tahun untuk paket Business dan Pro tahunan. Untuk perpanjangan tahun ke-2, Anda hanya bayar harga registrasi normal.',
  },
  {
    question: 'Server CloudFlared di mana saja?',
    answer:
      'Data center utama di Jakarta dan Surabaya untuk traffic Indonesia, plus node di Singapore, Tokyo, dan Frankfurt untuk traffic global. Kami pilih lokasi terdekat secara otomatis berdasarkan visitor.',
  },
  {
    question: 'Tim support pakai bahasa apa?',
    answer:
      'Bahasa Indonesia 24/7 lewat live chat, tiket, atau WhatsApp. Tim teknis kami semua di Indonesia, jadi tidak ada zona waktu yang menyulitkan.',
  },
  {
    question: 'Bisa upgrade paket kapan saja?',
    answer:
      'Bisa, sewaktu-waktu lewat panel. Selisih harga dihitung pro-rata dari sisa masa aktif paket lama. Tidak ada biaya tambahan dan tidak perlu migrasi ulang.',
  },
]
