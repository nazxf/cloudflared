import { Activity, Globe2, HardDrive, Server, Zap } from 'lucide-react'

const routeSteps = [
  { label: 'Visitor', value: 'start', icon: Globe2 },
  { label: 'Jakarta', value: '18ms edge', icon: Server },
  { label: 'LiteSpeed', value: '42ms TTFB', icon: Zap },
  { label: 'NVMe SSD', value: '<1ms read', icon: HardDrive },
]

const stackChips = [
  { label: 'NVMe', detail: 'SSD', icon: HardDrive },
  { label: 'LiteSpeed', detail: 'v6', icon: Zap },
  { label: 'HTTP/3', detail: 'QUIC', icon: Activity },
]

/**
 * Code-native benchmark console showing the request path through the hosting stack.
 */
export function SpeedMeterVisual() {
  return (
    <div className="relative aspect-[5/4] min-h-[382px] w-full overflow-hidden rounded-lg border border-cloud-line bg-[linear-gradient(145deg,rgba(255,248,240,0.96)_0%,rgba(255,255,255,0.98)_48%,rgba(247,250,255,0.98)_100%),linear-gradient(rgba(15,24,48,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,24,48,0.035)_1px,transparent_1px)] bg-[length:100%_100%,26px_26px,26px_26px] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_22px_60px_rgba(15,24,48,0.07)]">
      <div className="pointer-events-none absolute -right-16 -top-20 h-36 w-36 rounded-full bg-cloud-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-6 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase text-slate-500">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]" />
          </span>
          Live benchmark
        </span>
        <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase text-emerald-700">
          jakarta-01 active
        </span>
      </div>

      <div className="relative mt-5 grid grid-cols-[1fr_auto] items-center gap-4">
        <div>
          <div className="text-[11px] font-black uppercase text-slate-500">Page load</div>
          <div className="mt-1 flex items-end gap-1 font-black leading-none text-cloud-navy">
            <span className="text-[46px] tabular-nums sm:text-[50px]">1.2</span>
            <span className="text-base text-cloud-orange">s</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-cloud-line bg-white/80 px-2.5 py-1 text-[11px] font-extrabold text-slate-500 shadow-[0_8px_18px_rgba(15,24,48,0.04)]">
            <Activity size={12} strokeWidth={2.5} className="text-cloud-orange" />
            sampled live from edge
          </div>
        </div>

        <div className="grid h-[74px] w-[74px] shrink-0 place-items-center rounded-full bg-[conic-gradient(#ff5f00_0_98%,#edf1f7_98%_100%)] p-1.5 shadow-[0_16px_34px_rgba(255,95,0,0.18)]">
          <div className="grid h-full w-full place-items-center rounded-full bg-white text-center shadow-[inset_0_0_0_1px_rgba(231,235,243,0.9)]">
            <span className="text-[9px] font-black uppercase leading-none text-slate-400">Score</span>
            <span className="mt-0.5 text-xl font-black leading-none tabular-nums text-cloud-navy">
              98
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-5 overflow-hidden rounded-lg border border-cloud-line bg-white/88 p-3 shadow-[0_16px_36px_rgba(15,24,48,0.065)]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[10px] font-black uppercase text-slate-500">Request route</span>
          <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[9px] font-black uppercase text-cloud-orange">
            cache warm
          </span>
        </div>

        <svg
          viewBox="0 0 360 76"
          className="absolute inset-x-3 top-[46px] h-12 w-[calc(100%-24px)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="requestRoute" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0f1830" stopOpacity="0.2" />
              <stop offset="38%" stopColor="#ff5f00" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M26 38 C82 14 112 14 156 38 S248 62 334 28"
            fill="none"
            stroke="#e7ebf3"
            strokeLinecap="round"
            strokeWidth="12"
          />
          <path
            d="M26 38 C82 14 112 14 156 38 S248 62 334 28"
            fill="none"
            stroke="url(#requestRoute)"
            strokeDasharray="8 12"
            strokeLinecap="round"
            strokeWidth="4"
          >
            <animate attributeName="stroke-dashoffset" dur="2.8s" repeatCount="indefinite" values="40;0" />
          </path>
        </svg>

        <div className="relative grid grid-cols-4 gap-2">
          {routeSteps.map((step) => {
            const StepIcon = step.icon

            return (
              <div
                key={step.label}
                className="flex min-w-0 flex-col items-center rounded-md border border-cloud-line bg-white/95 px-1.5 pb-2 pt-2 text-center shadow-[0_10px_22px_rgba(15,24,48,0.055)]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-md border border-orange-100 bg-orange-50 text-cloud-orange shadow-[0_8px_16px_rgba(255,95,0,0.09)]">
                  <StepIcon size={15} strokeWidth={2.5} />
                </span>
                <span className="mt-2 min-h-[24px] max-w-[64px] text-[10px] font-black leading-tight text-cloud-navy">
                  {step.label}
                </span>
                <span className="mt-0.5 text-[9px] font-extrabold leading-none text-slate-500">
                  {step.value}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-bold sm:gap-3">
        {stackChips.map((chip) => {
          const ChipIcon = chip.icon

          return (
            <div
              key={chip.label}
              className="min-w-0 rounded-md border border-cloud-line bg-white/90 px-2 py-2.5 text-center shadow-[0_9px_20px_rgba(15,24,48,0.045)]"
            >
              <div className="flex items-center justify-center gap-1.5 text-cloud-navy">
                <ChipIcon className="shrink-0 text-cloud-orange" size={14} strokeWidth={2.5} />
                <span className="font-black leading-tight">{chip.label}</span>
              </div>
              <div className="mt-1 text-slate-500">{chip.detail}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
