export interface MonthlyRecord {
  month: string // e.g. "2025-10"
  label: string // e.g. "Oct 2025"
  income: number
  expenses: number
}

export interface CategorySpend {
  category: string
  amount: number
  color: string
}

const CATEGORY_COLORS: Record<string, string> = {
  Housing: '#2F6E63',
  Groceries: '#4C8B7F',
  Transport: '#6EA89E',
  Utilities: '#B5651D',
  Entertainment: '#D89457',
  Healthcare: '#8C8577',
  Other: '#B7B2A3',
}

function monthLabel(monthsAgo: number): { month: string; label: string } {
  const d = new Date()
  d.setDate(1)
  d.setMonth(d.getMonth() - monthsAgo)
  const month = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
  const label = d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
  return { month, label }
}

// 12 months of realistic income/expense variance, most recent last
export const monthlyData: MonthlyRecord[] = Array.from({ length: 12 }, (_, i) => {
  const monthsAgo = 11 - i
  const { month, label } = monthLabel(monthsAgo)
  const baseIncome = 185000
  const incomeVariance = Math.round(Math.sin(i / 2) * 8000 + (i === 6 ? 40000 : 0)) // one bonus month
  const baseExpenses = 118000
  const expenseVariance = Math.round(Math.cos(i / 3) * 12000 + (i === 9 ? 25000 : 0)) // one big-spend month
  return {
    month,
    label,
    income: baseIncome + incomeVariance,
    expenses: baseExpenses + expenseVariance,
  }
})

// Spending by category for the most recent period
export const categorySpend: CategorySpend[] = [
  { category: 'Housing', amount: 42000, color: CATEGORY_COLORS.Housing },
  { category: 'Groceries', amount: 18500, color: CATEGORY_COLORS.Groceries },
  { category: 'Transport', amount: 9800, color: CATEGORY_COLORS.Transport },
  { category: 'Utilities', amount: 7200, color: CATEGORY_COLORS.Utilities },
  { category: 'Entertainment', amount: 6400, color: CATEGORY_COLORS.Entertainment },
  { category: 'Healthcare', amount: 5100, color: CATEGORY_COLORS.Healthcare },
  { category: 'Other', amount: 8900, color: CATEGORY_COLORS.Other },
]

export type DateRange = '30d' | '90d' | '6m' | '12m'

export const dateRangeToMonths: Record<DateRange, number> = {
  '30d': 1,
  '90d': 3,
  '6m': 6,
  '12m': 12,
}
