import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, UsersRound } from 'lucide-react'
import type { RefObject } from 'react'
import { navLinks } from '@/data/nav'
import { softEase } from '@/lib/motion'

type MobileMenuProps = {
  open: boolean
  activeSection: string
  onLinkClick: () => void
  menuRef: RefObject<HTMLDivElement | null>
}

/**
 * Animated drop-down menu shown when the mobile hamburger trigger is open.
 * Mirrors the desktop navigation links plus a Login + CTA pair.
 */
export function MobileMenu({ open, activeSection, onLinkClick, menuRef }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
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
                  onClick={onLinkClick}
                >
                  {link.label}
                </a>
              )
            })}
            <div className="mt-1 grid gap-2 border-t border-cloud-line pt-3">
              <a
                href="#home"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-cloud-line px-3 py-3 text-sm font-extrabold text-cloud-navy hover:border-cloud-orange/45 hover:text-cloud-orange"
                onClick={onLinkClick}
              >
                <UsersRound size={16} />
                Login
              </a>
              <a
                href="#pricing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cloud-orange px-5 text-sm font-extrabold text-white shadow-cloud-orange"
                onClick={onLinkClick}
              >
                Mulai Sekarang
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
