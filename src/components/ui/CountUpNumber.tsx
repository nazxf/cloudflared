import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

type CountUpNumberProps = {
  /** Final numeric value to count to. */
  value: number
  /** Animation duration in seconds. */
  duration?: number
  /** Number of decimals to display. */
  decimals?: number
  /** Prefix string (e.g. "Rp "). */
  prefix?: string
  /** Suffix string (e.g. "+", "%", "K+"). */
  suffix?: string
  /** Locale-aware thousands grouping. */
  grouping?: boolean
  /** Optional className applied to the wrapping span. */
  className?: string
}

/**
 * Animated count-up number that triggers when scrolled into viewport.
 * Respects reduced-motion. Uses framer-motion `animate` (no extra deps).
 */
export function CountUpNumber({
  value,
  duration = 1.6,
  decimals = 0,
  prefix = '',
  suffix = '',
  grouping = false,
  className,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState<string>(() => format(0, decimals, grouping))

  useEffect(() => {
    if (!inView) return
    if (shouldReduceMotion) {
      setDisplay(format(value, decimals, grouping))
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(format(latest, decimals, grouping)),
    })
    return () => controls.stop()
  }, [inView, value, duration, decimals, grouping, shouldReduceMotion])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

function format(n: number, decimals: number, grouping: boolean): string {
  const fixed = n.toFixed(decimals)
  if (!grouping) return fixed
  const [int, frac] = fixed.split('.')
  const grouped = new Intl.NumberFormat('id-ID').format(Number(int))
  return frac ? `${grouped},${frac}` : grouped
}
