import React from 'react'

interface FlexibleTextProps {
  children: React.ReactNode
  minFontSize?: number // px
  maxFontSize?: number // px
  fontSize?: number // px
  lines?: number // 行数，超出省略
  style?: React.CSSProperties
  className?: string
}

const FlexibleText: React.FC<FlexibleTextProps> = ({
  children,
  minFontSize = 12,
  maxFontSize = 24,
  fontSize = 16,
  lines = 1,
  style,
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        fontSize: `clamp(${minFontSize}px, ${fontSize}px, ${maxFontSize}px)`,
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: lines === 1 ? 'nowrap' : 'normal',
        ...style,
      }}
      title={typeof children === 'string' ? children : undefined}
    >
      {children}
    </div>
  )
}

export default FlexibleText
