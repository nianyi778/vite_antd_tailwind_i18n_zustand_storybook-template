import { cn } from '@elestyle/utils' // 如果你有通用 className 工具
import * as Icons from 'lucide-react'
import * as React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof Icons
  size?: number
}

export const Icon = ({ name, size = 20, className, ...props }: IconProps) => {
  const LucideIcon = Icons[name] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >
  if (!LucideIcon) return null

  return (
    <LucideIcon
      width={size}
      height={size}
      className={cn('text-inherit', className)}
      {...props}
    />
  )
}
