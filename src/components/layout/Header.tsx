import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Menu, UsersRound, X } from 'lucide-react'
import cloudflaredLogo from '@/assets/cloudflared-logo.png'
import { navLinks } from '@/data/nav'
import { containerClass } from '@/components/ui/container.styles'
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { springs } from '@/lib/motion'
import { MobileMenu } from './MobileMenu'

type HeaderProps = {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  activeSection: string
  scrolled: boolean
  announcementOpen: boolean
}

/**
 * Fixed top navigation. Visually transparent over hero, then gains white surface,
 * blur and shadow once `scrolled` flips. Active section indicator slides between
 * nav items via shared layoutId.
 */
export function Header({
  menuOpen,
  setMenuOpen,
  activeSection,
  scrolled,
  announcementOpen,
}: HeaderProps) {
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
      <div
        className={`${containerClass} ${
          scrolled ? 'py-2.5 lg:py-3' : 'py-3.5 lg:py-4'
        } transition-[padding] duration-300`}
      >
        <nav className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center" aria-label="CloudFlared Home">
            <img
              src={cloudflaredLogo}
              alt="CloudFlared"
              className={`h-auto transition-[width] duration-300 ${
                scrolled ? 'w-[140px] lg:w-[152px]' : 'w-[152px] lg:w-[168px]'
              }`}
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
                      transition={springs.fluid}
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

        <MobileMenu
          open={menuOpen}
          activeSection={activeSection}
          menuRef={menuRef}
          onLinkClick={() => setMenuOpen(false)}
        />
      </div>
    </header>
  )
}
