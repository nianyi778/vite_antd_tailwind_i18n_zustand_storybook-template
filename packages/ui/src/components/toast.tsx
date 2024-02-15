import * as ToastPrimitive from '@radix-ui/react-toast'

export function Toast({
  title,
  open,
  onOpenChange,
}: {
  title: string
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className="fixed bottom-4 left-4 right-4 mx-auto w-auto rounded bg-black text-white px-4 py-2 text-sm shadow z-[999]"
      >
        <ToastPrimitive.Title>{title}</ToastPrimitive.Title>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed bottom-0 left-0 right-0 z-[999]" />
    </ToastPrimitive.Provider>
  )
}
