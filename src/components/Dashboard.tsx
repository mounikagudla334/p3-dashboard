import { useDateRange } from '../hooks/useDateRange'
import { categorySpend } from '../data/financeData'
import { KpiCard } from './KpiCard'
import { DateRangeFilter } from './DateRangeFilter'
import { TrendChart } from './TrendChart'
import { CategoryBarChart } from './CategoryBarChart'
import { CategoryPieChart } from './CategoryPieChart'

function formatINR(value: number) {
  return `₹${Math.round(value).toLocaleString('en-IN')}`
}

export function Dashboard() {
  const { range, setRange, filtered, totals } = useDateRange()

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <p className="font-mono text-xs text-slate uppercase tracking-wide">Personal Finance</p>
          <h1 className="font-display text-3xl mt-1">Household Dashboard</h1>
        </div>
        <DateRangeFilter value={range} onChange={setRange} />
      </div>

      {/* Top row: 4 KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <KpiCard label="Total Income" value={formatINR(totals.income)} />
        <KpiCard label="Total Expenses" value={formatINR(totals.expenses)} />
        <KpiCard
          label="Net Savings"
          value={formatINR(totals.net)}
          changeLabel={`${totals.net >= 0 ? 'positive' : 'negative'}`}
          trend={totals.net >= 0 ? 'up' : 'down'}
        />
        <KpiCard
          label="Savings Rate"
          value={`${totals.savingsRate.toFixed(1)}%`}
          trend={totals.savingsRate >= 20 ? 'up' : totals.savingsRate >= 0 ? 'neutral' : 'down'}
        />
      </div>

      {/* Middle row: full-width line chart */}
      <div className="mb-6">
        <TrendChart data={filtered} />
      </div>

      {/* Bottom row: bar (60%) + pie (40%) */}
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3">
          <CategoryBarChart data={categorySpend} />
        </div>
        <div className="md:col-span-2">
          <CategoryPieChart data={categorySpend} />
        </div>
      </div>
    </div>
  )
}
