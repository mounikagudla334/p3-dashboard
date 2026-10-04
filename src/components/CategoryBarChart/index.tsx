import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import type { CategorySpend } from '../../data/financeData'

interface Props {
  data: CategorySpend[]
}

export function CategoryBarChart({ data }: Props) {
  return (
    <div className="border border-line rounded-sm p-5 bg-white/40">
      <p className="font-mono text-xs text-slate uppercase tracking-wide mb-4">
        Spending by Category
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 8, right: 12 }}>
            <CartesianGrid stroke="#E1DFD6" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <YAxis
              dataKey="category"
              type="category"
              width={90}
              tick={{ fontSize: 12, fill: '#1B1E23' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              formatter={(value: any) => [`₹${Number(value ?? 0).toLocaleString('en-IN')}`, 'Spent']}
              contentStyle={{ fontSize: 12, borderRadius: 4, borderColor: '#E1DFD6' }}
            />
            <Bar dataKey="amount" radius={[0, 3, 3, 0]}>
              {data.map((entry) => (
                <Cell key={entry.category} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
