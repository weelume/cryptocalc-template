'use client'
import {stocks,text,type Locale} from '../content/data'
import {StockIcon,Change,Spark} from './Primitives'

export function Rates({locale}:{locale:Locale}) {
  const selection = stocks.slice(0,5)
  return <section className="pc-wrapper" id="prices"><div className="pc-card">
    <div className="pc-column"><h2 className="pc-title">{text(locale,'美股行情速览','US Stock Snapshot')}</h2><p className="pc-subtitle">{text(locale,'从热门公司开始 了解市场变化','Follow familiar companies and their market moves.')}<br/>{text(locale,'固定示例报价 仅供研究界面演示','Fixed sample quotes for interface demonstration.')}</p>
      <div className="pc-scroll-container"><div className="pc-scroll-content pc-scroll-down">{Array.from({length:4},(_,group)=><div key={group} aria-hidden={group>0}>{selection.map(stock=><div className="pc-list-row cc-rate-row" key={stock.symbol}><StockIcon symbol={stock.symbol} size={40}/><div><strong>{stock.name[locale]}</strong><small>{stock.symbol}</small></div><div><strong>${stock.price.toFixed(2)}</strong><Change value={stock.change}/></div><div className="cc-row-spark"><Spark color={stock.change<0?'#ef4444':'#10b981'}/></div></div>)}</div>)}</div></div>
    </div><div className="pc-divider"/>
    <div className="pc-column"><h2 className="pc-title">{text(locale,'公司估值一览','Valuation at a Glance')}</h2><p className="pc-subtitle">{text(locale,'从公司规模到盈利倍数','From company scale to earnings multiples.')}<br/>{text(locale,'用多个维度理解一只股票','Build context beyond the share price.')}</p>
      <div className="pc-scroll-container"><div className="pc-scroll-content">{Array.from({length:4},(_,group)=><div key={group} aria-hidden={group>0}>{selection.map(stock=><div className="pc-list-row cc-pair-row" key={stock.symbol}><StockIcon symbol={stock.symbol} size={36}/><div><strong>{stock.symbol} · P/E {stock.pe.toFixed(1)}</strong><small>{text(locale,'市值','Market cap')} ${stock.cap}</small></div><Spark color={stock.change<0?'#ef4444':'#10b981'}/></div>)}</div>)}</div></div>
    </div>
  </div></section>
}
