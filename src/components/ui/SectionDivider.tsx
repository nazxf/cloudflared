type SectionDividerProps = {
  className?: string
  /** Subtle hairline gradient at section seam. */
  variant?: 'hairline' | 'glow'
}

/**
 * Decorative divider for section transitions. Hairline by default; glow adds a soft halo.
 */
export function SectionDivider({ className, variant = 'hairline' }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative h-px w-full ${className ?? ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cloud-orange/25 to-transparent" />
      {variant === 'glow' && (
        <div className="absolute inset-x-0 -top-6 h-12 bg-[radial-gradient(60%_70%_at_50%_50%,rgba(255,95,0,0.10),transparent_70%)]" />
      )}
    </div>
  )
}
