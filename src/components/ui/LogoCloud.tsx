type LogoCloudProps = {
  caption?: string
  className?: string
}

const logos = [
  { name: 'Vortex', svg: <VortexLogo /> },
  { name: 'Helia', svg: <HeliaLogo /> },
  { name: 'Nordic', svg: <NordicLogo /> },
  { name: 'Pulsar', svg: <PulsarLogo /> },
  { name: 'Atlas', svg: <AtlasLogo /> },
  { name: 'Quanta', svg: <QuantaLogo /> },
]

/**
 * Inline-SVG client logo strip in muted slate tone. Used as social proof under hero.
 * Logos are deliberately abstract (no real third-party brands) to avoid trademark risk.
 */
export function LogoCloud({
  caption = 'Dipercaya 12.000+ website di Indonesia',
  className,
}: LogoCloudProps) {
  return (
    <div className={className}>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
        {caption}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-slate-400/85 [&>*]:transition-colors [&>*:hover]:text-cloud-navy">
        {logos.map((logo) => (
          <span key={logo.name} aria-label={logo.name} className="block h-5">
            {logo.svg}
          </span>
        ))}
      </div>
    </div>
  )
}

function VortexLogo() {
  return (
    <svg viewBox="0 0 110 22" className="h-5 w-auto fill-current">
      <circle cx="11" cy="11" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M11 4 a7 7 0 0 1 0 14" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="26" y="16" fontFamily="inherit" fontWeight="900" fontSize="13" letterSpacing="0.04em">
        VORTEX
      </text>
    </svg>
  )
}

function HeliaLogo() {
  return (
    <svg viewBox="0 0 100 22" className="h-5 w-auto fill-current">
      <path d="M3 18 L3 4 M3 11 L13 11 M13 4 L13 18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <text x="20" y="16" fontFamily="inherit" fontWeight="900" fontSize="13" letterSpacing="0.04em">
        helia
      </text>
    </svg>
  )
}

function NordicLogo() {
  return (
    <svg viewBox="0 0 110 22" className="h-5 w-auto fill-current">
      <polygon points="3,18 3,4 13,18 13,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <text x="20" y="16" fontFamily="inherit" fontWeight="900" fontSize="13" letterSpacing="0.05em">
        NORDIC
      </text>
    </svg>
  )
}

function PulsarLogo() {
  return (
    <svg viewBox="0 0 110 22" className="h-5 w-auto fill-current">
      <circle cx="9" cy="11" r="3.5" fill="currentColor" />
      <circle cx="9" cy="11" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <text x="22" y="16" fontFamily="inherit" fontWeight="900" fontSize="13" letterSpacing="0.05em">
        PULSAR
      </text>
    </svg>
  )
}

function AtlasLogo() {
  return (
    <svg viewBox="0 0 100 22" className="h-5 w-auto fill-current">
      <path d="M3 18 L9 4 L15 18 M5 14 L13 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <text x="22" y="16" fontFamily="inherit" fontWeight="900" fontSize="13" letterSpacing="0.04em">
        atlas
      </text>
    </svg>
  )
}

function QuantaLogo() {
  return (
    <svg viewBox="0 0 110 22" className="h-5 w-auto fill-current">
      <rect x="3" y="3" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="13" cy="15" r="2.5" fill="currentColor" />
      <text x="24" y="16" fontFamily="inherit" fontWeight="900" fontSize="13" letterSpacing="0.05em">
        QUANTA
      </text>
    </svg>
  )
}
