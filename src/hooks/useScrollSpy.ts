import { useEffect, useState } from 'react'

/**
 * Watches scroll-spy for a list of element IDs and returns the currently
 * "active" section id based on intersection ratio.
 *
 * @param ids list of DOM element ids to observe
 * @param options.rootMargin IntersectionObserver rootMargin (default biases toward middle of viewport)
 * @param options.threshold IntersectionObserver thresholds
 * @param options.initial initial active id before any intersection event fires
 */
export function useScrollSpy(
  ids: string[],
  options: {
    rootMargin?: string
    threshold?: number | number[]
    initial?: string
  } = {},
): string {
  const { rootMargin = '-40% 0px -50% 0px', threshold = [0, 0.25, 0.5, 0.75, 1], initial = ids[0] ?? '' } = options
  const [activeId, setActiveId] = useState<string>(initial)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) {
          setActiveId(visible.target.id)
        }
      },
      { rootMargin, threshold },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|'), rootMargin, JSON.stringify(threshold)])

  return activeId
}
