'use client'
import {useState} from 'react'
import {stocks,text,type Locale} from '../content/data'
import {calculatePosition} from '../position'
import {StockIcon} from './Primitives'

export function Calculator({locale}:{locale:Locale}) {
  const [symbol,setSymbol] = useState(stocks[0].symbol)
  const [shares,setShares] = useState('100')
  const [averageCost,setAverageCost] = useState('200')
  const stock = stocks.find(item => item.symbol === symbol)!
  const result = calculatePosition(shares, averageCost, stock.price)
  const money = (value:number) => value.toLocaleString('en-US',{style:'currency',currency:'USD'})
  return <div className="cc2-calc-card-wrapper cc-position" id="calculator">
    <div className="cc-position-heading">
      <strong>{text(locale,'持仓盈亏测算','Position & P&L Calculator')}</strong>
      <div className="cc-stock-select"><StockIcon symbol={symbol} size={30}/>
        <select aria-label={text(locale,'选择股票','Select stock')} value={symbol} onChange={e=>setSymbol(e.target.value)}>
          {stocks.map(item=><option key={item.symbol} value={item.symbol}>{item.symbol}</option>)}
        </select>
      </div>
    </div>
    <p className="cc-position-quote">{stock.name[locale]} · {text(locale,'参考股价','Reference price')} {money(stock.price)}</p>
    <div className="cc-position-inputs">
      <label>{text(locale,'持股数量','Shares')}<input inputMode="decimal" aria-invalid={result===null} value={shares} onChange={e=>setShares(e.target.value)}/></label>
      <label>{text(locale,'平均买入价（美元）','Average cost (USD)')}<input inputMode="decimal" aria-invalid={result===null} value={averageCost} onChange={e=>setAverageCost(e.target.value)}/></label>
    </div>
    <div className="cc-position-results" aria-live="polite">
      <div><span>{text(locale,'持仓市值','Position value')}</span><output>{result?money(result.marketValue):'—'}</output></div>
      <div><span>{text(locale,'持仓成本','Cost basis')}</span><output>{result?money(result.costBasis):'—'}</output></div>
      <div className={result&&result.profitLoss<0?'negative':'positive'}><span>{text(locale,'浮动盈亏','Unrealized P&L')}</span><output>{result?(result.profitLoss>0?'+':'')+money(result.profitLoss):'—'}</output></div>
      <div className={result&&result.profitLoss<0?'negative':'positive'}><span>{text(locale,'收益率','Return')}</span><output>{result?.returnPercent!=null?(result.returnPercent>0?'+':'')+result.returnPercent.toFixed(2)+'%':'—'}</output></div>
    </div>
    <p className="cc-demo-note" role={result===null?'alert':undefined}>{!result?text(locale,'请输入有效的非负数量和买入价','Enter valid non-negative shares and average cost'):result.returnPercent===null?text(locale,'零持仓或零成本不计算收益率；价格为固定示例','Return is undefined for zero holdings or cost; prices are fixed samples'):text(locale,'固定美元示例 · 未含费用、税款及分红','Fixed USD samples · Excludes fees, taxes and dividends')}</p>
  </div>
}
