import { cn } from '@elestyle/utils'
import * as RadixSwitch from '@radix-ui/react-switch'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const switchVariants = cva(
  'peer inline-flex w-12 shrink-0 items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      checked: {
        true: 'bg-primary',
        false: 'bg-muted',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
)

export interface SwitchProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadixSwitch.Root>,
      'checked' | 'disabled'
    >,
    VariantProps<typeof switchVariants> {
  label?: string
  checked?: boolean
  disabled?: boolean
}

export const Switch = React.forwardRef<
  React.ComponentRef<typeof RadixSwitch.Root>,
  SwitchProps
>(({ className, label, checked, disabled, ...props }, ref) => {
  return (
    <label className="flex cursor-pointer items-center space-x-2">
      <RadixSwitch.Root
        ref={ref}
        className={cn(switchVariants({ checked, disabled }), className)}
        disabled={disabled}
        {...props}
      >
        <RadixSwitch.Thumb
          className={cn(
            'block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform',
            'data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
          )}
        />
      </RadixSwitch.Root>
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  )
})

Switch.displayName = 'Switch'
