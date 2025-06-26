import * as ToastPrimitive from '@radix-ui/react-toast'
import * as React from 'react'

export interface ToastProps {
  title: string
  open: boolean
  onOpenChange: (v: boolean) => void
}

export const Toast = (props: ToastProps) => {
  const { title, open, onOpenChange } = props
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className="fixed bottom-4 left-4 right-4 z-[999] mx-auto w-auto rounded bg-black px-4 py-2 text-sm text-white shadow"
      >
        <ToastPrimitive.Title>{title}</ToastPrimitive.Title>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed bottom-0 left-0 right-0 z-[999]" />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
