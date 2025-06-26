import { cn } from '@elestyle/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog'
import * as React from 'react'

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
  fullscreen?: boolean
  className?: string
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  fullscreen = false,
  className,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay
          className={cn(
            'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm',
            'transition-opacity animate-in fade-in',
          )}
        />
        <DialogContent
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2',
            'rounded-xl bg-card p-4 text-card-foreground shadow-lg',
            'origin-center transition-all',
            fullscreen &&
              'h-full max-h-none w-full max-w-none rounded-none p-6',
            className,
          )}
        >
          {title ? (
            <DialogTitle className="mb-2 text-lg font-bold text-foreground">
              {title}
            </DialogTitle>
          ) : (
            <DialogTitle className="sr-only">Modal</DialogTitle> // 隐藏但提供给屏幕阅读器
          )}

          {description ? (
            <DialogDescription className="mb-4 text-sm text-muted-foreground">
              {description}
            </DialogDescription>
          ) : (
            <DialogDescription className="sr-only">
              Dialog opened. Press ESC to close.
            </DialogDescription>
          )}

          <div>{children}</div>
          {footer && <div className="mt-4">{footer}</div>}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
