import type { Transition } from 'framer-motion'

export type Ease = [number, number, number, number]

export const softEase: Ease = [0.16, 1, 0.3, 1]
export const floatEase: Ease = [0.45, 0, 0.55, 1]

export const springs = {
  snappy: { type: 'spring', stiffness: 420, damping: 34, mass: 0.7 } satisfies Transition,
  fluid: { type: 'spring', stiffness: 380, damping: 32 } satisfies Transition,
  fast: { type: 'spring', stiffness: 500, damping: 36, mass: 0.6 } satisfies Transition,
}

export type FadeFn = (delay?: number) => {
  initial: { opacity: number; y: number }
  whileInView: { opacity: number; y: number }
  viewport: { once: boolean; amount: number }
  transition: Transition
}

export type HeroFadeFn = (delay?: number) => {
  initial: { opacity: number; y: number }
  animate: { opacity: number; y: number }
  transition: Transition
}

/**
 * Creates a `fadeUp` animation factory respecting reduced motion.
 * Use for whileInView reveal animations on scrolled-in sections.
 */
export function createFadeUp(reduceMotion: boolean): FadeFn {
  return (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.24 },
    transition: { duration: reduceMotion ? 0 : 0.58, delay, ease: softEase },
  })
}

/**
 * Creates a `heroFade` animation factory respecting reduced motion.
 * Use for above-the-fold animate-on-mount elements.
 */
export function createHeroFade(reduceMotion: boolean): HeroFadeFn {
  return (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.68, delay, ease: softEase },
  })
}

/**
 * Floating animation config respecting reduced motion. Returns empty object when reduced.
 */
export function createFloatingMotion(reduceMotion: boolean) {
  if (reduceMotion) return {}
  return {
    animate: { y: [0, -14, 0] },
    transition: { duration: 7, repeat: Infinity, ease: floatEase },
  }
}
