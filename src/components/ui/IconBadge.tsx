import type { LucideIcon } from 'lucide-react'

type IconBadgeProps = {
  icon: LucideIcon
  /** Visual variant: `chip` for hero (white bg, orange icon, ring), `surface` for section accents (orange-50 bg). */
  variant?: 'chip' | 'surface' | 'soft'
  size?: 'sm' | 'md' | 'lg'
  iconSize?: number
  strokeWidth?: number
  className?: string
}

const variantClasses: Record<NonNullable<IconBadgeProps['variant']>, string> = {
  chip:
    'bg-white text-cloud-orange shadow-[0_12px_28px_rgba(16,24,40,0.08)] ring-1 ring-orange-100',
  surface: 'bg-orange-50 text-cloud-orange',
  soft: 'bg-white text-cloud-orange shadow-[0_12px_28px_rgba(255,106,0,0.12)]',
}

const sizeClasses: Record<NonNullable<IconBadgeProps['size']>, string> = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
}

/**
 * Reusable icon-circle badge used by trust badges, infrastructure benefits, etc.
 * Defaults: variant=chip, size=md.
 */
export function IconBadge({
  icon: Icon,
  variant = 'chip',
  size = 'md',
  iconSize,
  strokeWidth = 2.4,
  className = '',
}: IconBadgeProps) {
  const resolvedIconSize = iconSize ?? (size === 'lg' ? 27 : size === 'sm' ? 17 : 19)
  return (
    <span
      className={`inline-flex flex-none items-center justify-center rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Icon size={resolvedIconSize} strokeWidth={strokeWidth} />
    </span>
  )
}
