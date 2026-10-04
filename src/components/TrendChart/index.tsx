import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import type { MonthlyRecord } from '../../data/financeData'

interface Props {
  data: MonthlyRecord[]
}

function formatCurrency(value: number) {
  return `₹${(value / 1000).toFixed(0)}k`
}

export function TrendChart({ data }: Props) {
  return (
    <div className="border border-line rounded-sm p-5 bg-white/40">
      <p className="font-mono text-xs text-slate uppercase tracking-wide mb-4">
        Income vs. Expenses
      </p>
      {/* explicit height wrapper avoids the ResponsiveContainer zero-height issue */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#E1DFD6" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E1DFD6' }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatCurrency}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={false}
              tickLine={false}
              width={48}
            />
            <Tooltip
              formatter={(value: any) => [`₹${Number(value ?? 0).toLocaleString("en-IN")}`, ""]}
              contentStyle={{ fontSize: 12, borderRadius: 4, borderColor: '#E1DFD6' }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line
              type="monotone"
              dataKey="income"
              name="Income"
              stroke="#2F6E63"
              strokeWidth={2}
              dot={false}
              isAnimationActive
            />
            <Line
              type="monotone"
              dataKey="expenses"
              name="Expenses"
              stroke="#B5651D"
              strokeWidth={2}
              dot={false}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
