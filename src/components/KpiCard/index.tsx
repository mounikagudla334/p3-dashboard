interface KpiCardProps {
  label: string
  value: string
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
}

function formatChange(trend?: 'up' | 'down' | 'neutral') {
  if (trend === 'up') return { symbol: '▲', color: 'text-teal-dark' }
  if (trend === 'down') return { symbol: '▼', color: 'text-rust' }
  return { symbol: '—', color: 'text-slate' }
}

export function KpiCard({ label, value, changeLabel, trend }: KpiCardProps) {
  const change = formatChange(trend)
  return (
    <div className="border border-line rounded-sm p-5 bg-white/40">
      <p className="font-mono text-xs text-slate uppercase tracking-wide">{label}</p>
      <p className="mt-2 font-display text-2xl md:text-3xl">{value}</p>
      {changeLabel && (
        <p className={`mt-2 text-sm font-mono ${change.color}`}>
          {change.symbol} {changeLabel}
        </p>
      )}
    </div>
  )
}
