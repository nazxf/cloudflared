import { useState } from 'react'
import { Check, CheckCircle2, ChevronDown, Search } from 'lucide-react'

const tlds = ['.com', '.id', '.co.id', '.net', '.org']

/**
 * Hero domain search bar: input + TLD picker + cek button.
 * Form is intentionally non-functional (no submit handler); wire to backend later.
 */
export function DomainFinder() {
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
            onChange={(e) =>
              setDomain(e.target.value.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase())
            }
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
