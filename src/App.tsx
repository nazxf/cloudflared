import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Minus,
  Package,
  Plus,
  Search,
  Send,
  LockKeyhole,
  Star,
  UsersRound,
  X,
  Zap,
} from 'lucide-react'
import cloudflaredLogo from '@/assets/cloudflared-logo.png'
import infrastructureCloudGlobe from '@/assets/infrastructure-cloud-globe.png'
import heroCloudServer from '@/assets/hero-cloud-server.png'
import { navLinks } from '@/data/nav'
import { trustBadges, heroStats, heroFeature, features } from '@/data/features'
import { pricingPlans, cycleOptions, computeYearlyMonthly } from '@/data/pricing'
import { infrastructureBenefits } from '@/data/infrastructure'
import { testimonials } from '@/data/testimonials'
import { faqItems } from '@/data/faq'
import { footerColumns } from '@/data/footer'
import type { BillingCycle } from '@/data/types'
import { formatRupiah } from '@/lib/format'
import { softEase, floatEase, createFadeUp, createHeroFade, createFloatingMotion } from '@/lib/motion'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { containerClass } from '@/components/ui/container.styles'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { IconBadge } from '@/components/ui/IconBadge'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('yearly')
  const [announcementOpen, setAnnouncementOpen] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  const activeSection = useScrollSpy(navLinks.map((link) => link.id), { initial: 'home' })
  const scrolled = useScrollPosition(24)

  const fadeUp = createFadeUp(!!shouldReduceMotion)
  const heroFade = createHeroFade(!!shouldReduceMotion)
  const floatingMotion = createFloatingMotion(!!shouldReduceMotion)

  return (
    <div className="min-h-screen bg-white text-cloud-navy">
      <AnnouncementBar open={announcementOpen} onClose={() => setAnnouncementOpen(false)} />
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        scrolled={scrolled}
        announcementOpen={announcementOpen}
      />

      <main className={announcementOpen ? 'pt-9 sm:pt-10' : 'pt-0'}>
        <HeroSection heroFade={heroFade} />
        <PricingSection
          fadeUp={fadeUp}
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />
        <FeatureSection fadeUp={fadeUp} />
        <InfrastructureSection fadeUp={fadeUp} floatingMotion={floatingMotion} />
        <TestimonialsSection fadeUp={fadeUp} />
        <FaqSection fadeUp={fadeUp} />
        <CtaSection fadeUp={fadeUp} />
      </main>

      <Footer />
    </div>
  )
}

function AnnouncementBar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="announcement"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.32, ease: softEase }}
          className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-cloud-navy text-white"
        >
          <div className={`${containerClass} flex items-center justify-center gap-3 py-2.5 text-[12px] font-bold sm:text-[13px]`}>
            <span className="hidden items-center gap-1.5 text-emerald-300 sm:inline-flex">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.1em]">Live</span>
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
            <span className="flex-1 truncate text-center sm:flex-none sm:text-left">
              Promo Tahunan: <span className="font-black text-cloud-orange">Hemat 20%</span> + domain gratis 1 tahun.{' '}
              <a href="#pricing" className="font-black underline-offset-4 hover:underline">
                Lihat paket
              </a>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup pengumuman"
              className="ml-2 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Header({
  menuOpen,
  setMenuOpen,
  activeSection,
  scrolled,
  announcementOpen,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  activeSection: string
  scrolled: boolean
  announcementOpen: boolean
}) {
  const menuRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  useEscapeKey(() => setMenuOpen(false), menuOpen)
  useOutsideClick([menuRef, triggerRef], () => setMenuOpen(false), menuOpen)

  const headerTopClass = announcementOpen ? 'top-9 sm:top-10' : 'top-0'
  const surfaceClass = scrolled
    ? 'border-cloud-line/80 bg-white/85 shadow-[0_12px_36px_rgba(15,24,48,0.08)] backdrop-blur-md'
    : 'border-transparent bg-transparent shadow-none backdrop-blur-0'

  return (
    <header
      className={`fixed inset-x-0 ${headerTopClass} z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${surfaceClass}`}
    >
      <div className={`${containerClass} ${scrolled ? 'py-2.5 lg:py-3' : 'py-3.5 lg:py-4'} transition-[padding] duration-300`}>
        <nav className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center" aria-label="CloudFlared Home">
            <img
              src={cloudflaredLogo}
              alt="CloudFlared"
              className={`h-auto transition-[width] duration-300 ${scrolled ? 'w-[140px] lg:w-[152px]' : 'w-[152px] lg:w-[168px]'}`}
            />
          </a>

          <div className="hidden items-center gap-7 text-sm font-extrabold text-cloud-navy lg:flex xl:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-2 transition hover:text-cloud-orange ${
                    isActive ? 'text-cloud-orange' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-0.5 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-cloud-orange"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex xl:gap-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-extrabold text-cloud-navy transition hover:text-cloud-orange"
            >
              <UsersRound size={17} />
              Login
            </a>
            <a
              href="#pricing"
              className={`inline-flex items-center justify-center gap-2.5 rounded-lg bg-cloud-orange text-sm font-extrabold text-white shadow-cloud-orange transition hover:-translate-y-0.5 hover:bg-cloud-orange-2 ${
                scrolled ? 'min-h-[42px] px-5' : 'min-h-[46px] px-6'
              } transition-[min-height,padding] duration-300`}
            >
              Mulai Sekarang
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            ref={triggerRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cloud-line bg-white text-cloud-navy shadow-[0_12px_28px_rgba(16,24,40,0.08)] lg:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: softEase }}
              className="mt-3 rounded-lg border border-cloud-line bg-white p-3 shadow-cloud-card lg:hidden"
            >
              <div className="grid gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`rounded-md px-3 py-3 text-sm font-extrabold transition ${
                        isActive
                          ? 'bg-orange-50 text-cloud-orange'
                          : 'text-cloud-navy hover:bg-orange-50 hover:text-cloud-orange'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                })}
                <div className="mt-1 grid gap-2 border-t border-cloud-line pt-3">
                  <a
                    href="#home"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-cloud-line px-3 py-3 text-sm font-extrabold text-cloud-navy hover:border-cloud-orange/45 hover:text-cloud-orange"
                    onClick={() => setMenuOpen(false)}
                  >
                    <UsersRound size={16} />
                    Login
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cloud-orange px-5 text-sm font-extrabold text-white shadow-cloud-orange"
                    onClick={() => setMenuOpen(false)}
                  >
                    Mulai Sekarang
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

function HeroSection({ heroFade }: { heroFade: (delay?: number) => object }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cloud-hero pb-16 pt-20 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className={`${containerClass} relative z-10`}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-6">
          <motion.div {...heroFade(0.04)} className="max-w-[710px] pt-4 lg:pt-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/85 px-4 py-2 text-sm font-extrabold text-cloud-orange shadow-[0_14px_34px_rgba(255,106,0,0.08)] backdrop-blur">
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

            <DomainFinder />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
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

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="flex items-center gap-3">
                  <IconBadge icon={badge.icon} variant="chip" size="md" />
                  <span>
                    <span className="block text-sm font-extrabold text-cloud-navy">{badge.title}</span>
                    <span className="mt-0.5 block text-xs font-semibold text-slate-500">{badge.description}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...heroFade(0.18)}
            className="hero-art relative mx-auto w-full max-w-[640px] lg:max-w-none"
          >
            <img
              src={heroCloudServer}
              alt="Ilustrasi server cloud aman CloudFlared"
              className="relative z-10 mx-auto block h-auto w-full max-w-[640px] select-none drop-shadow-[0_40px_70px_rgba(255,106,0,0.16)] lg:max-w-[720px] xl:max-w-[780px]"
            />
            <HeroFloatingChips reduceMotion={!!shouldReduceMotion} />
          </motion.div>
        </div>

        <motion.div
          {...heroFade(0.26)}
          className="relative z-20 mt-12 grid rounded-lg border border-cloud-line bg-white/95 px-5 py-5 shadow-cloud-card backdrop-blur sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:px-0 lg:py-6"
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

function DomainFinder() {
  const tlds = ['.com', '.id', '.co.id', '.net', '.org']
  const [domain, setDomain] = useState('')
  const [tld, setTld] = useState(tlds[0])
  const [tldOpen, setTldOpen] = useState(false)

  return (
    <form
      className="mt-7 max-w-[560px]"
      onSubmit={(e) => {
        e.preventDefault()
      }}
      role="search"
      aria-label="Cari domain"
    >
      <div className="flex items-stretch overflow-hidden rounded-lg border border-cloud-line bg-white shadow-[0_18px_44px_rgba(16,24,40,0.08)] focus-within:border-cloud-orange/60 focus-within:ring-2 focus-within:ring-cloud-orange/15">
        <div className="flex flex-1 items-center gap-2 px-4">
          <Search size={17} className="flex-none text-slate-400" />
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase())}
            placeholder="cari-domain-idaman"
            className="min-w-0 flex-1 bg-transparent py-3.5 text-sm font-bold text-cloud-navy placeholder:font-semibold placeholder:text-slate-400 focus:outline-none"
            aria-label="Nama domain"
          />
        </div>

        <div className="relative flex items-center border-l border-cloud-line">
          <button
            type="button"
            onClick={() => setTldOpen((prev) => !prev)}
            aria-expanded={tldOpen}
            aria-haspopup="listbox"
            className="inline-flex h-full items-center gap-1.5 px-3 text-sm font-black text-cloud-navy hover:text-cloud-orange"
          >
            {tld}
            <ChevronDown size={14} className={`transition ${tldOpen ? 'rotate-180' : ''}`} />
          </button>
          {tldOpen && (
            <ul
              role="listbox"
              className="absolute right-0 top-full z-30 mt-2 min-w-[120px] overflow-hidden rounded-md border border-cloud-line bg-white py-1 shadow-cloud-card"
            >
              {tlds.map((option) => (
                <li key={option} role="option" aria-selected={tld === option}>
                  <button
                    type="button"
                    onClick={() => {
                      setTld(option)
                      setTldOpen(false)
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2 text-sm font-extrabold transition ${
                      tld === option
                        ? 'bg-orange-50 text-cloud-orange'
                        : 'text-cloud-navy hover:bg-orange-50 hover:text-cloud-orange'
                    }`}
                  >
                    {option}
                    {tld === option && <Check size={13} strokeWidth={3} />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-cloud-orange px-5 text-sm font-black text-white transition hover:bg-cloud-orange-2 sm:px-6"
          aria-label="Cari domain"
        >
          <Search size={16} className="sm:hidden" />
          <span className="hidden sm:inline">Cek Domain</span>
        </button>
      </div>
      <p className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-cloud-orange" />
          Gratis 1 tahun untuk paket Business
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-cloud-orange" />
          Mulai Rp 99.000/tahun
        </span>
      </p>
    </form>
  )
}

function HeroFloatingChips({ reduceMotion }: { reduceMotion: boolean }) {
  const float = (delay: number) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -8, 0] },
          transition: { duration: 6, delay, repeat: Infinity, ease: floatEase },
        }

  return (
    <>
      <motion.div
        {...float(0)}
        className="pointer-events-none absolute left-2 top-12 z-20 hidden items-center gap-2.5 rounded-full border border-cloud-line bg-white/95 px-3.5 py-2 shadow-[0_18px_36px_rgba(15,24,48,0.12)] backdrop-blur sm:flex lg:left-[-12px] lg:top-16"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <LockKeyhole size={15} strokeWidth={2.6} />
        </span>
        <div className="text-left">
          <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">SSL</div>
          <div className="text-sm font-black text-cloud-navy">Active &amp; Encrypted</div>
        </div>
      </motion.div>

      <motion.div
        {...float(1.2)}
        className="pointer-events-none absolute right-0 top-4 z-20 hidden items-center gap-3 rounded-md border border-cloud-line bg-white/95 px-4 py-2.5 shadow-[0_18px_36px_rgba(15,24,48,0.12)] backdrop-blur md:flex lg:right-[-8px] lg:top-8"
      >
        <div className="text-left">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
            <Activity size={12} className="text-cloud-orange" />
            Uptime 30d
          </div>
          <div className="mt-0.5 text-sm font-black tabular-nums text-cloud-navy">99.97%</div>
        </div>
        <svg viewBox="0 0 56 22" className="h-5 w-14" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 16 L8 14 L16 18 L24 8 L32 12 L40 5 L48 9 L56 3"
            fill="none"
            stroke="#ff5f00"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        {...float(2.1)}
        className="pointer-events-none absolute bottom-6 left-4 z-20 hidden items-center gap-2.5 rounded-full border border-cloud-line bg-white/95 px-3.5 py-2 shadow-[0_18px_36px_rgba(15,24,48,0.12)] backdrop-blur md:flex lg:bottom-10 lg:left-2"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-cloud-orange">
          <MapPin size={15} strokeWidth={2.6} />
        </span>
        <div className="text-left">
          <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Routed via</div>
          <div className="text-sm font-black text-cloud-navy">Jakarta · 14ms</div>
        </div>
      </motion.div>
    </>
  )
}

function PricingSection({
  fadeUp,
  billingCycle,
  setBillingCycle,
}: {
  fadeUp: (delay?: number) => object
  billingCycle: BillingCycle
  setBillingCycle: (cycle: BillingCycle) => void
}) {
  const shouldReduceMotion = useReducedMotion()
  const flipDistance = shouldReduceMotion ? 0 : 22

  return (
    <section
      id="pricing"
      className="relative bg-[linear-gradient(180deg,#fff8f0_0%,#ffffff_52%)] pb-20 pt-20 lg:pb-24 lg:pt-24"
    >
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
          <div
            role="tablist"
            aria-label="Siklus pembayaran"
            className="relative inline-flex gap-1 self-start rounded-lg border border-cloud-line bg-white p-1.5 shadow-[0_12px_28px_rgba(16,24,40,0.06)] lg:justify-self-end"
          >
            {cycleOptions.map((option) => {
              const isActive = billingCycle === option.id
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setBillingCycle(option.id)}
                  className="relative inline-flex min-h-10 items-center gap-2 rounded-md px-4 text-sm font-extrabold transition-colors duration-200 focus-visible:outline-none"
                >
                  {isActive && (
                    <motion.span
                      layoutId="billing-cycle-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-md bg-cloud-orange shadow-[0_10px_24px_rgba(255,106,0,0.28)]"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 34,
                        mass: 0.7,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-cloud-navy group-hover:text-cloud-orange'
                    }`}
                  >
                    {option.label}
                  </span>
                  {option.hint && (
                    <span
                      className={`relative z-10 rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wide transition-colors duration-200 ${
                        isActive ? 'bg-white/25 text-white' : 'bg-orange-50 text-cloud-orange'
                      }`}
                    >
                      {option.hint}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => {
            const monthly = plan.monthlyPrice
            const yearlyMonthlyEquivalent = computeYearlyMonthly(monthly)
            const displayPrice = billingCycle === 'yearly' ? yearlyMonthlyEquivalent : monthly
            const billedNote =
              billingCycle === 'yearly'
                ? `Ditagih Rp ${formatRupiah(displayPrice * 12)}/tahun`
                : 'Ditagih bulanan'

            return (
              <motion.article
                key={plan.name}
                {...fadeUp(index * 0.08)}
                className={`group relative flex flex-col overflow-hidden rounded-lg border bg-white p-7 shadow-cloud-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,24,48,0.12)] ${
                  plan.featured
                    ? 'border-cloud-orange ring-1 ring-cloud-orange/25 lg:-my-2 lg:py-9'
                    : 'border-cloud-line'
                }`}
              >
                {plan.featured && (
                  <div className="absolute left-0 right-0 top-0 flex items-center justify-center gap-1.5 bg-cloud-orange py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white">
                    <Star size={11} fill="currentColor" strokeWidth={0} />
                    Paling Populer
                  </div>
                )}
                <div className={plan.featured ? 'pt-8' : ''}>
                  <h3 className="text-2xl font-black text-cloud-navy">{plan.name}</h3>
                  <p className="mt-3 min-h-12 text-sm font-medium leading-6 text-slate-500">
                    {plan.description}
                  </p>
                  <div className="mt-7 flex items-end gap-1">
                    <span className="text-xs font-extrabold text-cloud-navy">Rp</span>
                    <div className="relative h-9 overflow-hidden">
                      <AnimatePresence initial={false}>
                        <motion.span
                          key={billingCycle}
                          initial={{ y: flipDistance, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -flipDistance, opacity: 0 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: softEase }}
                          className="absolute inset-0 block whitespace-nowrap text-3xl font-black leading-none text-cloud-orange tabular-nums"
                        >
                          {formatRupiah(displayPrice)}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <span className="pb-1 text-sm font-bold text-slate-500">/bulan</span>
                  </div>
                  <div className="mt-2 h-4 overflow-hidden">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.p
                        key={billedNote}
                        initial={{ y: shouldReduceMotion ? 0 : 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: shouldReduceMotion ? 0 : -8, opacity: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: softEase }}
                        className="text-xs font-semibold text-slate-500"
                      >
                        {billedNote}
                      </motion.p>
                    </AnimatePresence>
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
                  className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border text-sm font-black transition ${
                    plan.featured
                      ? 'border-cloud-orange bg-cloud-orange text-white shadow-cloud-orange hover:bg-cloud-orange-2'
                      : 'border-cloud-line bg-white text-cloud-navy hover:border-cloud-orange hover:text-cloud-orange'
                  }`}
                >
                  Pilih Paket
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FeatureSection({ fadeUp }: { fadeUp: (delay?: number) => object }) {
  const HeroIcon = heroFeature.icon

  return (
    <section id="features" className="bg-white py-20 lg:py-24">
      <div className={containerClass}>
        <motion.div {...fadeUp(0.02)} className="max-w-[760px]">
          <SectionLabel icon={Zap}>Fitur Unggulan</SectionLabel>
          <h2 className="mt-5 text-[32px] font-black leading-[1.12] tracking-hero text-cloud-navy sm:text-[44px]">
            Semua yang Dibutuhkan untuk Website yang Cepat dan Aman
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <motion.article
            {...fadeUp(0.06)}
            className="group relative overflow-hidden rounded-lg border border-cloud-line bg-white p-7 shadow-cloud-card lg:p-9"
          >
            <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-9">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-cloud-orange">
                  <HeroIcon size={13} strokeWidth={2.6} />
                  {heroFeature.eyebrow}
                </span>
                <h3 className="mt-5 text-2xl font-black leading-[1.18] text-cloud-navy lg:text-[28px]">
                  {heroFeature.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600 lg:text-[15px]">
                  {heroFeature.description}
                </p>
                <div className="mt-7 grid grid-cols-3 gap-4 border-t border-cloud-line pt-6">
                  {heroFeature.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl font-black text-cloud-orange tabular-nums lg:text-2xl">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <SpeedMeterVisual />
            </div>
          </motion.article>

          <div className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.article
                  key={feature.title}
                  {...fadeUp(0.1 + index * 0.06)}
                  className="group flex gap-5 rounded-lg border border-cloud-line bg-white p-6 shadow-[0_18px_45px_rgba(16,24,40,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cloud-orange/40 hover:shadow-[0_24px_55px_rgba(255,95,0,0.14)]"
                >
                  <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-orange-50 text-cloud-orange transition group-hover:bg-cloud-orange group-hover:text-white">
                    <Icon size={22} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-cloud-navy">{feature.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{feature.description}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function SpeedMeterVisual() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-md border border-cloud-line bg-[linear-gradient(155deg,#fff8f0_0%,#ffffff_60%)] p-6">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wide text-slate-500">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live Benchmark
        </span>
        <span className="text-[11px] font-bold text-slate-400">jakarta-01</span>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Page Load</div>
          <div className="mt-1 flex items-baseline gap-1 font-black text-cloud-navy">
            <span className="text-4xl tabular-nums">1.2</span>
            <span className="text-base text-cloud-orange">s</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Score</div>
          <div className="mt-1 text-2xl font-black tabular-nums text-cloud-navy">98</div>
        </div>
      </div>

      <svg
        viewBox="0 0 220 70"
        className="mt-5 h-16 w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="speedGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff5f00" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#ff5f00" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 50 L25 46 L50 48 L75 30 L100 34 L125 18 L150 22 L175 12 L200 16 L220 8"
          fill="none"
          stroke="#ff5f00"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 50 L25 46 L50 48 L75 30 L100 34 L125 18 L150 22 L175 12 L200 16 L220 8 L220 70 L0 70 Z"
          fill="url(#speedGrad)"
        />
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] font-bold">
        <div className="rounded-md bg-white px-3 py-2 text-center shadow-[0_6px_18px_rgba(15,24,48,0.05)]">
          <div className="font-black text-cloud-navy">NVMe</div>
          <div className="mt-0.5 text-slate-500">SSD</div>
        </div>
        <div className="rounded-md bg-white px-3 py-2 text-center shadow-[0_6px_18px_rgba(15,24,48,0.05)]">
          <div className="font-black text-cloud-navy">LiteSpeed</div>
          <div className="mt-0.5 text-slate-500">v6</div>
        </div>
        <div className="rounded-md bg-white px-3 py-2 text-center shadow-[0_6px_18px_rgba(15,24,48,0.05)]">
          <div className="font-black text-cloud-navy">HTTP/3</div>
          <div className="mt-0.5 text-slate-500">QUIC</div>
        </div>
      </div>
    </div>
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
            {infrastructureBenefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <IconBadge icon={benefit.icon} variant="soft" size="md" iconSize={23} className="rounded-full" />
                <div>
                  <h3 className="text-lg font-black text-cloud-navy">{benefit.title}</h3>
                  <p className="mt-1 text-sm font-medium leading-6 text-slate-600">{benefit.description}</p>
                </div>
              </div>
            ))}
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
    <section id="testimonials" className="bg-white py-20 lg:py-24">
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
              className="flex h-full flex-col rounded-lg border border-cloud-line bg-white p-7 shadow-cloud-card transition duration-300 hover:-translate-y-1 hover:border-cloud-orange/30 hover:shadow-[0_28px_60px_rgba(15,24,48,0.12)]"
            >
              <div className="flex gap-1 text-cloud-orange" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={17} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm font-medium leading-7 text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-cloud-line pt-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cloud-navy text-sm font-black text-white">
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

function FaqSection({ fadeUp }: { fadeUp: (delay?: number) => object }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[linear-gradient(180deg,#ffffff_0%,#fff8f0_100%)] py-20 lg:py-24">
      <div className={containerClass}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div {...fadeUp(0.02)}>
            <SectionLabel icon={Headphones}>Pertanyaan Umum</SectionLabel>
            <h2 className="mt-5 text-[32px] font-black leading-[1.14] tracking-hero text-cloud-navy sm:text-[42px]">
              Hal yang Sering Ditanyakan Sebelum Mulai
            </h2>
            <p className="mt-5 max-w-[440px] text-base font-medium leading-7 text-slate-600">
              Tidak ketemu jawabannya? Tim kami online 24/7 lewat live chat dan WhatsApp untuk
              bantu langsung.
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
                        isOpen
                          ? 'bg-cloud-orange text-white'
                          : 'bg-orange-50 text-cloud-orange'
                      }`}
                    >
                      {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
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

function CtaSection({ fadeUp }: { fadeUp: (delay?: number) => object }) {
  return (
    <section
      id="support"
      className="relative bg-[linear-gradient(180deg,#fff8f0_0%,#fff8f0_55%,#0a1422_55%,#0a1422_100%)] pt-20 lg:pt-24"
    >
      <div className={containerClass}>
        <motion.div
          {...fadeUp(0.02)}
          className="cta-pattern relative overflow-hidden rounded-lg px-7 py-10 text-white shadow-[0_28px_70px_rgba(255,106,0,0.26)] sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14"
        >
          <div className="relative z-10">
            <h2 className="max-w-[540px] text-[30px] font-black leading-[1.16] sm:text-[40px]">
              Siap Membangun Website Anda?
            </h2>
            <p className="mt-4 max-w-[560px] text-sm font-semibold leading-7 text-white/90 sm:text-base">
              Bergabung sekarang dan rasakan performa hosting terbaik bersama CloudFlared.
            </p>
          </div>
          <div className="relative z-10 mt-8 lg:mt-0 lg:flex-none">
            <a
              href="#pricing"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-white px-8 text-base font-black text-cloud-orange shadow-[0_18px_36px_rgba(16,24,40,0.18)] transition hover:-translate-y-0.5"
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
    <footer className="footer-grid pt-16 text-white lg:pt-20">
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

export default App
