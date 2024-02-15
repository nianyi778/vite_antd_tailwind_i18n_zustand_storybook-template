import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '@elestyle/utils'

export interface BottomSheetProps extends React.ComponentPropsWithoutRef<typeof Dialog.Root> {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

export function BottomSheet({
  children,
  className,
  title = '弹窗标题',
  description = '弹窗内容',
  open,
  onOpenChange,
  ...props
}: BottomSheetProps) {
  const [isVisible, setIsVisible] = React.useState(open)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (open) {
      setIsVisible(true)
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300) // 300ms = leave animation
      return () => clearTimeout(timeout)
    }
  }, [open])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>
      {isVisible && (
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Dialog.Content
            ref={ref}
            aria-describedby="bottom-sheet-desc"
            className={cn(
              'fixed bottom-0 left-0 right-0 z-50 rounded-t-lg bg-white p-4 transition-transform duration-300',
              open ? 'animate-in slide-in-from-bottom' : 'animate-out slide-out-to-bottom',
              className
            )}
          >
            <Dialog.Title className="sr-only">{title}</Dialog.Title>
            <Dialog.Description id="bottom-sheet-desc" className="sr-only">
              {description}
            </Dialog.Description>
            <div className="h-1.5 w-10 bg-muted rounded-full mx-auto mb-4" />
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  )
}
