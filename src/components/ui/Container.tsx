import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { containerClass } from './container.styles'

type ContainerProps<T extends ElementType> = {
  as?: T
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

/**
 * Page-level horizontal container. Defaults to <div>; pass `as` to render a different element.
 */
export function Container<T extends ElementType = 'div'>({
  as,
  className,
  ...rest
}: ContainerProps<T>) {
  const Component = (as ?? 'div') as ElementType
  const merged = className ? `${containerClass} ${className}` : containerClass
  return <Component className={merged} {...rest} />
}
