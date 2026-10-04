import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import type { CategorySpend } from '../../data/financeData'

interface Props {
  data: CategorySpend[]
}

export function CategoryPieChart({ data }: Props) {
  return (
    <div className="border border-line rounded-sm p-5 bg-white/40">
      <p className="font-mono text-xs text-slate uppercase tracking-wide mb-4">
        Budget Allocation
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="category"
              innerRadius={45}
              outerRadius={80}
              paddingAngle={2}
              isAnimationActive
            >
              {data.map((entry) => (
                <Cell key={entry.category} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: any) => [`₹${Number(value ?? 0).toLocaleString("en-IN")}`, ""]}
              contentStyle={{ fontSize: 12, borderRadius: 4, borderColor: '#E1DFD6' }}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
