import { useMemo, useState } from 'react'
import { monthlyData, dateRangeToMonths, type DateRange } from '../data/financeData'

export function useDateRange() {
  const [range, setRange] = useState<DateRange>('6m')

  const filtered = useMemo(() => {
    const months = dateRangeToMonths[range]
    return monthlyData.slice(-months)
  }, [range])

  const totals = useMemo(() => {
    const income = filtered.reduce((sum, m) => sum + m.income, 0)
    const expenses = filtered.reduce((sum, m) => sum + m.expenses, 0)
    const net = income - expenses
    const savingsRate = income > 0 ? (net / income) * 100 : 0
    return { income, expenses, net, savingsRate }
  }, [filtered])

  return { range, setRange, filtered, totals }
}
