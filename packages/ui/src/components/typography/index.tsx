import { cn } from '@elestyle/utils'
import * as React from 'react'

type Variant = 'title' | 'paragraph' | 'text' | 'muted' | 'code'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  variant?: Variant
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  code?: boolean
  className?: string
}

const baseVariants: Record<Variant, string> = {
  title: 'text-xl font-bold text-foreground',
  paragraph: 'text-base leading-relaxed text-foreground',
  text: 'text-sm text-foreground',
  muted: 'text-sm text-muted-foreground',
  code: 'text-sm font-mono px-1 py-0.5 bg-muted text-foreground rounded',
}

export const Typography: React.FC<TypographyProps> = ({
  as: Tag = 'span',
  variant = 'text',
  bold,
  italic,
  underline,
  strikethrough,
  code,
  className,
  children,
  ...props
}) => {
  const classes = cn(
    baseVariants[variant],
    bold && 'font-bold',
    italic && 'italic',
    underline && 'underline',
    strikethrough && 'line-through',
    className,
  )

  const content = code ? (
    <code className={baseVariants.code}>{children}</code>
  ) : (
    children
  )

  return (
    <Tag className={classes} {...props}>
      {content}
    </Tag>
  )
}
