import { useEffect } from 'react'

/**
 * Calls `onEscape` when the Escape key is pressed.
 * Pass `enabled = false` to skip listening (e.g. when a panel is closed).
 */
export function useEscapeKey(onEscape: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onEscape()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [enabled, onEscape])
}
