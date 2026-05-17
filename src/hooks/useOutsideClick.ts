import { useEffect } from 'react'
import type { RefObject } from 'react'

/**
 * Calls `onOutside` when the user clicks outside of every provided ref.
 * Pass `enabled = false` to skip listening.
 */
export function useOutsideClick(
  refs: Array<RefObject<HTMLElement | null>>,
  onOutside: () => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      const insideAny = refs.some((ref) => ref.current && ref.current.contains(target))
      if (!insideAny) onOutside()
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [enabled, onOutside, refs])
}
