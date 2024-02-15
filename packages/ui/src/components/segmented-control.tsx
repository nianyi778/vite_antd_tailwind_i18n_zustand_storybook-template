interface SegmentedControlProps {
  options: string[]
  value: string
  onChange: (v: string) => void
}

export function SegmentedControl({ options, value, onChange }: SegmentedControlProps) {
  return (
    <div className="flex items-center justify-center rounded-lg bg-muted p-1 text-sm">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 rounded-md transition-colors ${
            opt === value ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
