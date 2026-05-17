import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  CircleGauge,
  Clock3,
  Cloud,
  Globe2,
  Headphones,
  LockKeyhole,
  Mail,
  Menu,
  Package,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Star,
  UsersRound,
  X,
  Zap,
} from 'lucide-react'
import cloudflaredLogo from './assets/cloudflared-logo.png'
import infrastructureCloudGlobe from './assets/infrastructure-cloud-globe.png'
import landingHeroImagegen from './assets/landing-hero-imagegen.png'

type NavLink = {
  label: string
  href: string
}

type IconText = {
  icon: LucideIcon
  title: string
  description: string
}

type PricingPlan = {
  name: string
  description: string
  price: string
  featured?: boolean
  features: string[]
}

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

type FooterColumn = {
  title: string
  links: string[]
}

const navLinks: NavLink[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Hosting', href: '#pricing' },
  { label: 'Domain', href: '#features' },
  { label: 'Fitur', href: '#features' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Bantuan', href: '#support' },
]

const trustBadges: IconText[] = [
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

const heroStats: IconText[] = [
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

const features: IconText[] = [
  {
    icon: CircleGauge,
    title: 'Performa Tinggi',
    description: 'Server NVMe SSD dan LiteSpeed menjaga website tetap cepat saat traffic naik.',
  },
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

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Cocok untuk website pribadi dan project baru.',
    price: 'Rp 19.000',
    features: ['1 Website', '10 GB NVMe SSD', 'SSL Gratis', 'Backup Harian', 'Support Standar'],
  },
  {
    name: 'Business',
    description: 'Paling pas untuk bisnis yang sedang berkembang.',
    price: 'Rp 49.000',
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
    price: 'Rp 99.000',
    features: ['Unlimited Website', '80 GB NVMe SSD', 'Gratis SSL & Domain', 'Backup Harian', 'Priority Support'],
  },
]

const infrastructureBenefits: IconText[] = [
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

const testimonials: Testimonial[] = [
  {
    quote: 'Server cepat, support responsif, dan uptime benar-benar terjaga. CloudFlared hosting terbaik yang pernah saya pakai.',
    name: 'Ardiansyah',
    role: 'Developer',
    initials: 'AR',
  },
  {
    quote: 'Migrasi ke CloudFlared sangat mudah. Website saya jadi lebih cepat dan aman.',
    name: 'Siti Nurhaliza',
    role: 'Pemilik Toko Online',
    initials: 'SN',
  },
  {
    quote: 'Harga terjangkau dengan fitur lengkap. Support 24/7-nya benar-benar membantu saat dibutuhkan.',
    name: 'Rizky Pratama',
    role: 'Blogger',
    initials: 'RP',
  },
]

const footerColumns: FooterColumn[] = [
  {
    title: 'Layanan',
    links: ['Hosting', 'Domain', 'SSL Certificate', 'Website Builder'],
  },
  {
    title: 'Perusahaan',
    links: ['About Us', 'Blog', 'Karir', 'Kontak'],
  },
  {
    title: 'Bantuan',
    links: ['FAQ', 'Tutorial', 'Knowledge Base', 'Status Server'],
  },
]

const containerClass = 'mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10'
const softEase: [number, number, number, number] = [0.16, 1, 0.3, 1]
const floatEase: [number, number, number, number] = [0.45, 0, 0.55, 1]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.24 },
    transition: { duration: shouldReduceMotion ? 0 : 0.58, delay, ease: softEase },
  })

  const heroFade = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.68, delay, ease: softEase },
  })

  const floatingMotion = shouldReduceMotion
    ? {}
    : {
        animate: { y: [0, -14, 0] },
        transition: { duration: 7, repeat: Infinity, ease: floatEase },
      }

  return (
    <div className="min-h-screen overflow-hidden bg-white text-cloud-navy">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <HeroSection heroFade={heroFade} />
        <PricingSection fadeUp={fadeUp} />
        <FeatureSection fadeUp={fadeUp} />
        <InfrastructureSection fadeUp={fadeUp} floatingMotion={floatingMotion} />
        <TestimonialsSection fadeUp={fadeUp} />
        <CtaSection fadeUp={fadeUp} />
      </main>

      <Footer />
    </div>
  )
}

function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}) {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className={`${containerClass} py-5`}>
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center" aria-label="CloudFlared Home">
            <img src={cloudflaredLogo} alt="CloudFlared" className="h-auto w-[168px] lg:w-[188px]" />
          </a>

          <div className="hidden items-center gap-10 text-sm font-extrabold text-cloud-navy lg:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-2 transition hover:text-cloud-orange ${
                  index === 0 ? 'text-cloud-orange after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-cloud-orange' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="#home" className="inline-flex items-center gap-2 text-sm font-extrabold text-cloud-navy transition hover:text-cloud-orange">
              <UsersRound size={18} />
              Login
            </a>
            <a
              href="#pricing"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-cloud-orange px-7 text-sm font-extrabold text-white shadow-cloud-orange transition hover:-translate-y-0.5 hover:bg-cloud-orange-2"
            >
              Mulai Sekarang
              <ArrowRight size={18} />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-cloud-line bg-white text-cloud-navy shadow-[0_12px_28px_rgba(16,24,40,0.08)] lg:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-lg border border-cloud-line bg-white p-4 shadow-cloud-card lg:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-sm font-extrabold text-cloud-navy hover:bg-orange-50 hover:text-cloud-orange"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-cloud-orange px-5 text-sm font-extrabold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Mulai Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

function HeroSection({ heroFade }: { heroFade: (delay?: number) => object }) {
  return (
    <section id="home" className="relative overflow-hidden bg-cloud-hero pb-0 pt-24 sm:pt-28 lg:pb-0 lg:pt-[104px]">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className={`${containerClass} relative z-10`}>
        <div className="grid min-h-[462px] items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-0">
          <motion.div {...heroFade(0.04)} className="max-w-[710px] pt-7 lg:pt-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/78 px-4 py-2 text-sm font-extrabold text-cloud-orange shadow-[0_14px_34px_rgba(255,106,0,0.08)] backdrop-blur">
              <Zap size={15} fill="currentColor" strokeWidth={2.6} />
              Hosting Cepat. Aman. Terpercaya.
            </div>

            <h1 className="max-w-[710px] text-[42px] font-black leading-[1.06] tracking-hero text-cloud-navy sm:text-[58px] lg:text-[64px] xl:text-[70px]">
              <span className="block">Web Hosting</span>
              <span className="block">
                yang <span className="text-cloud-orange">Ngebut &amp;</span>
              </span>
              <span className="block text-cloud-orange">Aman</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-base font-semibold leading-[1.8] text-slate-600">
              CloudFlared menyediakan layanan web hosting berkinerja tinggi dengan keamanan terbaik
              dan uptime 99.9%.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg bg-cloud-orange px-7 text-[15px] font-extrabold text-white shadow-cloud-orange transition hover:-translate-y-0.5 hover:bg-cloud-orange-2"
              >
                Mulai Sekarang
                <ArrowRight size={19} />
              </a>
              <a
                href="#pricing"
                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg border border-cloud-line bg-white px-7 text-[15px] font-extrabold text-cloud-navy shadow-[0_16px_36px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:border-cloud-orange/45 hover:text-cloud-orange"
              >
                Lihat Paket
                <Package size={18} />
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {trustBadges.map((badge) => {
                const Icon = badge.icon

                return (
                  <div key={badge.title} className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-cloud-orange shadow-[0_12px_28px_rgba(16,24,40,0.08)] ring-1 ring-orange-100">
                      <Icon size={19} strokeWidth={2.4} />
                    </span>
                    <span>
                      <span className="block text-sm font-extrabold text-cloud-navy">{badge.title}</span>
                      <span className="mt-0.5 block text-xs font-semibold text-slate-500">{badge.description}</span>
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div {...heroFade(0.18)} className="hero-art relative mx-auto w-full max-w-[740px] lg:-mr-14 xl:-mr-20">
            <img
              src={landingHeroImagegen}
              alt="Ilustrasi server cloud aman CloudFlared"
              className="relative z-10 mx-auto w-[142%] max-w-none -translate-x-[25%] select-none mix-blend-multiply drop-shadow-[0_40px_70px_rgba(255,106,0,0.13)]"
            />
          </motion.div>
        </div>

        <motion.div
          {...heroFade(0.26)}
          className="relative z-20 mt-0 grid rounded-lg border border-cloud-line bg-white/94 px-5 py-5 shadow-cloud-card backdrop-blur sm:grid-cols-2 lg:grid-cols-4 lg:px-0 lg:py-6"
        >
          {heroStats.map((stat) => {
            const Icon = stat.icon

            return (
              <div key={stat.title} className="stat-divider flex items-center justify-center gap-4 px-5 py-4 lg:py-0">
                <Icon size={30} strokeWidth={2.2} className="text-cloud-navy" />
                <span>
                  <span className="block text-2xl font-black leading-none text-cloud-navy">{stat.title}</span>
                  <span className="mt-1 block text-sm font-semibold text-slate-500">{stat.description}</span>
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function PricingSection({ fadeUp }: { fadeUp: (delay?: number) => object }) {
  return (
    <section id="pricing" className="relative bg-[linear-gradient(180deg,#fff8f0_0%,#ffffff_52%)] pb-20 pt-0 lg:pb-24 lg:pt-0">
      <div className={containerClass}>
        <div className="grid items-end gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionLabel icon={BadgeCheck}>Paket Hosting</SectionLabel>
            <h2 className="mt-5 max-w-[520px] text-[32px] font-black leading-[1.14] tracking-hero text-cloud-navy sm:text-[42px]">
              Pilih Paket Hosting Sesuai Kebutuhanmu
            </h2>
            <p className="mt-5 max-w-[520px] text-base font-medium leading-7 text-slate-600">
              Semua paket sudah termasuk SSL gratis, backup harian, panel mudah digunakan, dan support responsif.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {['Bulanan', 'Tahunan Hemat 20%'].map((item, index) => (
              <button
                key={item}
                type="button"
                className={`min-h-11 rounded-lg border px-5 text-sm font-extrabold transition ${
                  index === 1
                    ? 'border-cloud-orange bg-cloud-orange text-white shadow-[0_12px_28px_rgba(255,106,0,0.2)]'
                    : 'border-cloud-line bg-white text-cloud-navy hover:border-cloud-orange/45'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              {...fadeUp(index * 0.08)}
              className={`relative overflow-hidden rounded-lg border bg-white p-7 shadow-cloud-card ${
                plan.featured ? 'border-cloud-orange ring-1 ring-cloud-orange/20' : 'border-cloud-line'
              }`}
            >
              {plan.featured && (
                <div className="absolute left-0 right-0 top-0 bg-cloud-orange py-2 text-center text-xs font-black uppercase tracking-[0.08em] text-white">
                  Paling Populer
                </div>
              )}
              <div className={plan.featured ? 'pt-8' : ''}>
                <h3 className="text-2xl font-black text-cloud-navy">{plan.name}</h3>
                <p className="mt-3 min-h-12 text-sm font-medium leading-6 text-slate-500">{plan.description}</p>
                <div className="mt-7 flex items-end gap-1">
                  <span className="text-xs font-extrabold text-cloud-navy">Rp</span>
                  <span className="text-3xl font-black text-cloud-orange">{plan.price.replace('Rp ', '')}</span>
                  <span className="pb-1 text-sm font-bold text-slate-500">/bulan</span>
                </div>
              </div>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold text-cloud-navy">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-cloud-orange">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#home"
                className={`mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg border text-sm font-black transition ${
                  plan.featured
                    ? 'border-cloud-orange bg-cloud-orange text-white shadow-cloud-orange hover:bg-cloud-orange-2'
                    : 'border-cloud-line bg-white text-cloud-navy hover:border-cloud-orange hover:text-cloud-orange'
                }`}
              >
                Pilih Paket
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureSection({ fadeUp }: { fadeUp: (delay?: number) => object }) {
  return (
    <section id="features" className="bg-white py-20 lg:py-24">
      <div className={containerClass}>
        <motion.div {...fadeUp(0.02)} className="mx-auto max-w-[720px] text-center">
          <SectionLabel icon={Zap}>Fitur Unggulan</SectionLabel>
          <h2 className="mt-5 text-[32px] font-black leading-[1.15] tracking-hero text-cloud-navy sm:text-[44px]">
            Semua yang Dibutuhkan untuk Website yang Cepat dan Aman
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={feature.title}
                {...fadeUp(index * 0.07)}
                className="rounded-lg border border-cloud-line bg-white p-6 shadow-[0_18px_45px_rgba(16,24,40,0.06)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-orange-50 text-cloud-orange">
                  <Icon size={27} strokeWidth={2.4} />
                </div>
                <h3 className="mt-5 text-lg font-black text-cloud-navy">{feature.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{feature.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function InfrastructureSection({
  fadeUp,
  floatingMotion,
}: {
  fadeUp: (delay?: number) => object
  floatingMotion: object
}) {
  return (
    <section className="bg-[#fff2e8] py-20 lg:py-24">
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

          <div className="mt-9 grid gap-5">
            {infrastructureBenefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <div key={benefit.title} className="flex gap-4">
                  <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white text-cloud-orange shadow-[0_12px_28px_rgba(255,106,0,0.12)]">
                    <Icon size={23} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-cloud-navy">{benefit.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-6 text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.08)} className="relative">
          <motion.img
            {...floatingMotion}
            src={infrastructureCloudGlobe}
            alt="Ilustrasi infrastruktur cloud global"
            className="mx-auto w-full max-w-[790px] drop-shadow-[0_34px_60px_rgba(255,106,0,0.16)]"
          />
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection({ fadeUp }: { fadeUp: (delay?: number) => object }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={containerClass}>
        <motion.div {...fadeUp(0.02)} className="mx-auto max-w-[760px] text-center">
          <SectionLabel icon={BadgeCheck}>Testimoni</SectionLabel>
          <h2 className="mt-5 text-[32px] font-black leading-[1.15] tracking-hero text-cloud-navy sm:text-[44px]">
            Dipercaya oleh Ribuan Pelanggan di Seluruh Indonesia
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-[1080px] gap-7 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              {...fadeUp(index * 0.08)}
              className="rounded-lg border border-cloud-line bg-white p-7 shadow-cloud-card"
            >
              <div className="flex gap-1 text-cloud-orange" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={17} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 min-h-[104px] text-sm font-medium leading-7 text-slate-600">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="text-sm font-black text-cloud-navy">{testimonial.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection({ fadeUp }: { fadeUp: (delay?: number) => object }) {
  return (
    <section id="support" className="relative z-10 -mb-12 bg-white">
      <div className={containerClass}>
        <motion.div
          {...fadeUp(0.02)}
          className="cta-pattern rounded-lg px-7 py-9 text-white shadow-[0_28px_70px_rgba(255,106,0,0.26)] sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-14"
        >
          <div>
            <h2 className="max-w-[540px] text-[30px] font-black leading-[1.16] sm:text-[38px]">
              Siap Membangun Website Anda?
            </h2>
            <p className="mt-4 max-w-[560px] text-sm font-semibold leading-7 text-white/90 sm:text-base">
              Bergabung sekarang dan rasakan performa hosting terbaik bersama CloudFlared.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <a
              href="#pricing"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-white px-8 text-base font-black text-cloud-orange shadow-[0_18px_36px_rgba(16,24,40,0.12)] transition hover:-translate-y-0.5"
            >
              Mulai Sekarang
              <ArrowRight size={19} />
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 size={16} />
              30-Day Money Back Guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer-grid pt-24 text-white">
      <div className={containerClass}>
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.25fr_2fr_1.15fr]">
          <div>
            <a href="#home" className="flex items-center" aria-label="CloudFlared Home">
              <img src={cloudflaredLogo} alt="CloudFlared" className="h-auto w-[150px]" />
            </a>
            <p className="mt-5 max-w-[310px] text-sm font-medium leading-7 text-slate-300">
              Layanan web hosting berkinerja tinggi dengan keamanan terbaik dan uptime 99.9% untuk
              kesuksesan online Anda.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black text-white">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#home" className="text-sm font-medium text-slate-300 transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-black text-white">Newsletter</h3>
            <p className="mt-5 text-sm font-medium leading-7 text-slate-300">
              Dapatkan info terbaru dan promo menarik dari kami.
            </p>
            <form className="mt-5 flex rounded-lg bg-white/10 p-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Anda
              </label>
              <div className="flex flex-1 items-center gap-2 px-3 text-slate-300">
                <Mail size={17} />
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email Anda"
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm font-semibold text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                aria-label="Subscribe newsletter"
                className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-md bg-cloud-orange text-white transition hover:bg-cloud-orange-2"
              >
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-sm font-medium text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 CloudFlared. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#home" className="transition hover:text-white">
              Kebijakan Privasi
            </a>
            <a href="#home" className="transition hover:text-white">
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SectionLabel({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-black text-cloud-orange">
      <Icon size={15} />
      {children}
    </span>
  )
}

export default App
