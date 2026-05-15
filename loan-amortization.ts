interface AmortizationEntry {
  month: number
  payment: number
  principal: number
  interest: number
  remainingBalance: number
}

/**
 * Builds a fixed-rate loan amortization schedule
 * @param loanAmount - Loan principal in dollars
 * @param annualRate - Annual interest rate as decimal (e.g., 0.0675 for 6.75%)
 * @param termMonths - Loan term in months
 * @returns Per-month breakdown of payment, principal, interest, remaining balance
 * @example buildAmortizationSchedule(285000, 0.0675, 360)[0] // first-month entry
 */
export const buildAmortizationSchedule = (
  loanAmount: number,
  annualRate: number,
  termMonths: number,
): AmortizationEntry[] => {
  const monthlyRate = annualRate / 12
  const monthlyPayment = monthlyRate === 0
    ? loanAmount / termMonths
    : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths))

  const schedule: AmortizationEntry[] = []
  let remainingBalance = loanAmount

  for (let month = 1; month <= termMonths; month++) {
    const interest = remainingBalance * monthlyRate
    // Final installment absorbs accumulated rounding so the balance closes at zero
    const isFinalMonth = month === termMonths
    const principal = isFinalMonth ? remainingBalance : monthlyPayment - interest
    const payment = principal + interest
    remainingBalance = remainingBalance - principal

    schedule.push({
      month,
      payment: roundCents(payment),
      principal: roundCents(principal),
      interest: roundCents(interest),
      remainingBalance: roundCents(remainingBalance),
    })
  }

  return schedule
}

const roundCents = (value: number): number => Math.round(value * 100) / 100
