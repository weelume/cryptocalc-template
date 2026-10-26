export interface PositionResult {
  costBasis: number
  marketValue: number
  profitLoss: number
  returnPercent: number | null
}

/** 仅测算多头股票的美元持仓；零成本的收益率无定义，显式返回 null。 */
export function calculatePosition(shares: string, averageCost: string, price: number): PositionResult | null {
  const valid = /^\d+(?:\.\d*)?$/
  if (!valid.test(shares.trim()) || !valid.test(averageCost.trim())) return null
  const quantity = Number(shares), cost = Number(averageCost)
  if (!Number.isFinite(quantity) || !Number.isFinite(cost) || !Number.isFinite(price) || quantity < 0 || cost < 0 || price <= 0) return null
  const costBasis = quantity * cost, marketValue = quantity * price, profitLoss = marketValue - costBasis
  if (![costBasis, marketValue, profitLoss].every(Number.isFinite)) return null
  const returnPercent = costBasis > 0 ? profitLoss / costBasis * 100 : null
  if (returnPercent !== null && !Number.isFinite(returnPercent)) return null
  return {costBasis, marketValue, profitLoss, returnPercent}
}
