import { cn } from '@elestyle/utils'

interface LoadingProps {
  size?: number
  className?: string
}

export const Loading = ({ size = 24, className }: LoadingProps) => {
  return (
    <div
      className={cn(
        'animate-spin border-t-transparent rounded-full border-2 border-primary',
        className,
      )}
      style={{
        width: size,
        height: size,
      }}
      aria-label="Loading"
    />
  )
}
