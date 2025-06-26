import { cn } from '@elestyle/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 disabled:bg-primary/50 disabled:text-primary-foreground/70',
        destructive:
          'bg-destructive text-white shadow-lg hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 disabled:bg-destructive/60 disabled:text-white/70',
        outline:
          'border border-input bg-background shadow-lg hover:bg-accent hover:text-accent-foreground disabled:bg-muted disabled:text-muted-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/80 disabled:bg-secondary/50 disabled:text-secondary-foreground/60',
        ghost:
          'hover:bg-accent hover:text-accent-foreground disabled:text-muted disabled:bg-transparent',
        link: 'text-primary underline-offset-4 hover:underline hover:text-primary/80 disabled:text-muted disabled:no-underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      block: false,
    },
  },
)

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  block?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      block = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className, block }))}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { buttonVariants }
