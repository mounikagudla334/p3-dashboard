import type { DateRange } from '../../data/financeData'

const options: { value: DateRange; label: string }[] = [
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
  { value: '6m', label: 'Last 6 months' },
  { value: '12m', label: 'Last 12 months' },
]

interface Props {
  value: DateRange
  onChange: (range: DateRange) => void
}

export function DateRangeFilter({ value, onChange }: Props) {
  return (
    <div className="inline-flex rounded-sm border border-line overflow-hidden">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-2 text-sm font-mono transition-colors ${
            value === opt.value
              ? 'bg-ink text-paper'
              : 'bg-transparent text-ink/60 hover:text-ink'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
