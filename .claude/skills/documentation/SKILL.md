---
name: documentation
description: Use this skill when writing or editing TypeScript functions. Enforces JSDoc on all exported functions with @param, @returns, and @example. Skips private helpers under 10 lines.
---

# Documentation

## Trigger
When creating or editing TypeScript functions in this project.

## Instructions
- Add JSDoc comments to all exported functions
- Every JSDoc must include: @param, @returns, and @example
- Keep descriptions short — one line per tag
- Skip documentation for private helper functions under 10 lines

## Constraints
- Never add JSDoc to interfaces or type definitions
- Never document obvious getters/setters (getName, setEmail)
- Never write multi-paragraph descriptions — if it needs that much explanation, the function is too complex

## Example

Bad — no documentation:
  export const calculateTax = (income: number, rate: number): number => {
    return income * rate
  }

Good — clear, minimal JSDoc:
  /**
   * Calculates tax amount based on income and rate
   * @param income - Gross annual income
   * @param rate - Tax rate as decimal (e.g., 0.17)
   * @returns The calculated tax amount
   * @example calculateTax(100000, 0.17) // 17000
   */
  export const calculateTax = (income: number, rate: number): number => {
    return income * rate
  }
