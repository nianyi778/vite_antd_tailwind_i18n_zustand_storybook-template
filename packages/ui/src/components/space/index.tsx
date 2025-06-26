import { cn } from '@elestyle/utils'
import * as React from 'react'

type Size = 'small' | 'middle' | 'large' | number

const sizeMap: Record<Exclude<Size, number>, string> = {
  small: '0.5rem',
  middle: '1rem',
  large: '1.5rem',
}

export interface SpaceProps {
  children?: React.ReactNode
  direction?: 'horizontal' | 'vertical'
  size?: Size
  wrap?: boolean
  split?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const Space: React.FC<SpaceProps> = ({
  children,
  direction = 'horizontal',
  size = 'small',
  wrap = false,
  split,
  className,
  style,
}) => {
  const childArray = React.Children.toArray(children).filter(Boolean)

  const gap = typeof size === 'number' ? `${size}px` : sizeMap[size]

  const flexDirection = direction === 'vertical' ? 'flex-col' : 'flex-row'

  return (
    <div
      className={cn('flex', flexDirection, wrap && 'flex-wrap', className)}
      style={{ gap, ...style }}
    >
      {childArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {split && index !== childArray.length - 1 && <span>{split}</span>}
        </React.Fragment>
      ))}
    </div>
  )
}
