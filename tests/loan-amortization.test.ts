import { describe, it, expect } from 'vitest'
import { buildAmortizationSchedule } from '../loan-amortization'

describe('buildAmortizationSchedule', () => {
  it('should return one entry per month, numbered 1 through termMonths, when given a multi-year term', () => {
    const schedule = buildAmortizationSchedule(285000, 0.0675, 360)
    expect(schedule).toHaveLength(360)
    expect(schedule[0].month).toBe(1)
    expect(schedule[359].month).toBe(360)
  })

  it('should produce the standard ~$1848.47 monthly payment when given $285k at 6.75% over 30 years', () => {
    const schedule = buildAmortizationSchedule(285000, 0.0675, 360)
    expect(schedule[0].payment).toBeCloseTo(1848.47, 1)
  })

  it('should charge first-month interest equal to principal x monthlyRate when amortization begins', () => {
    const schedule = buildAmortizationSchedule(285000, 0.0675, 360)
    // 285000 * 0.0675 / 12 = 1603.125 -> 1603.13 after roundCents
    expect(schedule[0].interest).toBeCloseTo(1603.13, 1)
    expect(schedule[0].principal).toBeCloseTo(1848.47 - 1603.13, 1)
  })

  it('should keep payment within one cent of principal + interest when both components are rounded separately', () => {
    const schedule = buildAmortizationSchedule(285000, 0.0675, 360)
    for (const entry of schedule) {
      // Compare in integer cents to avoid float-subtraction noise on the boundary
      const paymentCents = Math.round(entry.payment * 100)
      const splitCents =
        Math.round(entry.principal * 100) + Math.round(entry.interest * 100)
      expect(Math.abs(paymentCents - splitCents)).toBeLessThanOrEqual(1)
    }
  })

  it('should close the remaining balance to exactly zero when the final month is reached', () => {
    const schedule = buildAmortizationSchedule(285000, 0.0675, 360)
    expect(schedule[359].remainingBalance).toBe(0)
  })

  it('should reduce the remaining balance monotonically when payments are applied month over month', () => {
    const schedule = buildAmortizationSchedule(285000, 0.0675, 360)
    for (let monthIndex = 1; monthIndex < schedule.length; monthIndex++) {
      expect(schedule[monthIndex].remainingBalance).toBeLessThan(
        schedule[monthIndex - 1].remainingBalance,
      )
    }
  })

  it('should shift the principal/interest mix toward principal when amortization progresses', () => {
    const schedule = buildAmortizationSchedule(285000, 0.0675, 360)
    const firstEntry = schedule[0]
    const midEntry = schedule[179]
    const lastEntry = schedule[359]
    expect(firstEntry.principal).toBeLessThan(firstEntry.interest)
    expect(midEntry.principal).toBeGreaterThan(firstEntry.principal)
    expect(lastEntry.principal).toBeGreaterThan(lastEntry.interest)
  })

  it('should repay principal in equal installments with zero interest when the annual rate is 0', () => {
    const schedule = buildAmortizationSchedule(12000, 0, 24)
    expect(schedule).toHaveLength(24)
    for (const entry of schedule) {
      expect(entry.interest).toBe(0)
      expect(entry.payment).toBe(500)
      expect(entry.principal).toBe(500)
    }
    expect(schedule[23].remainingBalance).toBe(0)
  })

  it('should repay the full principal plus one month of interest when the term is a single month', () => {
    const schedule = buildAmortizationSchedule(10000, 0.12, 1)
    expect(schedule).toHaveLength(1)
    const onlyEntry = schedule[0]
    expect(onlyEntry.principal).toBe(10000)
    expect(onlyEntry.interest).toBeCloseTo(100, 2)
    expect(onlyEntry.payment).toBeCloseTo(10100, 2)
    expect(onlyEntry.remainingBalance).toBe(0)
  })

  it('should round every monetary field to two decimal places when constructing each entry', () => {
    const schedule = buildAmortizationSchedule(285000, 0.0675, 360)
    for (const entry of schedule) {
      expect(entry.payment).toBe(Math.round(entry.payment * 100) / 100)
      expect(entry.principal).toBe(Math.round(entry.principal * 100) / 100)
      expect(entry.interest).toBe(Math.round(entry.interest * 100) / 100)
      expect(entry.remainingBalance).toBe(
        Math.round(entry.remainingBalance * 100) / 100,
      )
    }
  })

  it('should keep the sum of principal payments within rounding drift of the original loan amount when the term completes', () => {
    const loanAmount = 285000
    const schedule = buildAmortizationSchedule(loanAmount, 0.0675, 360)
    const totalPrincipalPaid = schedule.reduce(
      (runningTotal, entry) => runningTotal + entry.principal,
      0,
    )
    expect(Math.abs(totalPrincipalPaid - loanAmount)).toBeLessThan(2)
  })
})
