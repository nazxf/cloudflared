/**
 * Stylized "live benchmark" visual: pulsing dot, page load value, speed score,
 * area-fill SVG sparkline, and 3 tech badges. Static — illustrative only.
 */
export function SpeedMeterVisual() {
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
