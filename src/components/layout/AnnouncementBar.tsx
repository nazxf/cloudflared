import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { containerClass } from '@/components/ui/container.styles'
import { softEase } from '@/lib/motion'

type AnnouncementBarProps = {
  open: boolean
  onClose: () => void
}

/**
 * Top-of-page announcement strip with live status dot, promo copy, and dismiss button.
 * Animates height collapse on close.
 */
export function AnnouncementBar({ open, onClose }: AnnouncementBarProps) {
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
          <div
            className={`${containerClass} flex items-center justify-center gap-3 py-2.5 text-[12px] font-bold sm:text-[13px]`}
          >
            <span className="hidden items-center gap-1.5 text-emerald-300 sm:inline-flex">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.1em]">Live</span>
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
            <span className="flex-1 truncate text-center sm:flex-none sm:text-left">
              Promo Tahunan:{' '}
              <span className="font-black text-cloud-orange">Hemat 20%</span> + domain gratis 1 tahun.{' '}
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
