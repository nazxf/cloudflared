import { useEffect, useState } from 'react'

/**
 * Returns true when window scrollY exceeds threshold. Re-evaluates passively on scroll.
 */
export function useScrollPosition(threshold = 0): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
