import * as React from 'react'

export interface SegmentedControlProps {
  options: string[]
  value: string
  onChange: (v: string) => void
}

export const SegmentedControl = React.forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(({ options, value, onChange }, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-center rounded-lg bg-muted p-1 text-sm"
    >
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`rounded-md px-3 py-1.5 transition-colors ${
            opt === value
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'text-muted-foreground hover:bg-accent'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
})

SegmentedControl.displayName = 'SegmentedControl'
