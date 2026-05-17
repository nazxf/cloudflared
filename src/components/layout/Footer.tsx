import { Mail, Send } from 'lucide-react'
import cloudflaredLogo from '@/assets/cloudflared-logo.png'
import { footerColumns } from '@/data/footer'
import { containerClass } from '@/components/ui/container.styles'
import './Footer.css'

/**
 * Page footer with brand summary, link columns, newsletter form, legal row.
 * Background pattern lives in Footer.css (.footer-grid).
 */
export function Footer() {
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
                      <a
                        href="#home"
                        className="text-sm font-medium text-slate-300 transition hover:text-white"
                      >
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
