import { Star } from 'lucide-react'

type RatingPillProps = {
  score?: string
  reviews?: string
  className?: string
}

/**
 * Compact rating pill with 5 filled stars, score and review count.
 * Used as an above-the-fold trust signal.
 */
export function RatingPill({
  score = '4.9',
  reviews = '2.300+ review',
  className,
}: RatingPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border border-orange-100 bg-white/85 px-3.5 py-1.5 shadow-[0_10px_24px_rgba(15,24,48,0.06)] backdrop-blur ${className ?? ''}`}
    >
      <span className="flex gap-0.5 text-cloud-orange" aria-label={`${score} dari 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span className="text-[13px] font-black text-cloud-navy tabular-nums">{score}</span>
      <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
        {reviews}
      </span>
    </span>
  )
}
