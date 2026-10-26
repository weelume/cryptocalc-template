'use client'
import {stocks,text,type Locale} from '../content/data'
import {StockIcon,Change,Reveal,Spark} from './Primitives'

export function Features({locale}:{locale:Locale}) {
  return <section className="why-section" id="features">
    <Reveal className="why-title-area"><h2 className="why-title">{text(locale,'从市场到持仓','From Market to Portfolio')}<br/><span className="orange-highlight">{text(locale,'让研究更有条理','Research with Clarity')}</span></h2>
      <p className="why-subtitle">{text(locale,'把价格、估值与持仓放在同一个视角','Prices, valuations and positions in one clear view.')}<br/>{text(locale,'为独立研究和理性决策提供直观工具','Intuitive tools for independent research and informed decisions.')}</p>
    </Reveal>
    <Reveal down delay={.2} className="why-grid-container">
      <div className="why-card span-2"><span className="card-header-icon">◎</span><h3 className="card-title">{text(locale,'看懂价格','Understand Prices')}<br/>{text(locale,'与市场变化','and Market Moves')}</h3><p className="card-desc">{text(locale,'把公司名称、示例股价和涨跌幅集中呈现，减少信息切换。','See company names, sample share prices and daily moves together.')}</p>
        <div className="cc-mini-rates">{stocks.slice(0,4).map(stock=><div key={stock.symbol}><StockIcon symbol={stock.symbol} size={26}/><span>{stock.name[locale]}</span><strong>${stock.price.toFixed(2)}</strong><Change value={stock.change}/></div>)}</div>
      </div>
      <div className="why-card span-2"><span className="card-header-icon">◉</span><h3 className="card-title">{text(locale,'持仓表现','Position Performance')}<br/>{text(locale,'清晰测算','Made Clear')}</h3><p className="card-desc">{text(locale,'输入数量与平均成本，快速理解持仓市值、浮动盈亏和收益率。','Estimate position value, unrealized P&L and return from shares and average cost.')}</p>
        <div className="cc-mini-calc"><small>{text(locale,'苹果 · 100股 · 平均成本 $200','Apple · 100 shares · Average cost $200')}</small><p>$22,826 <span>{text(locale,'市值','Value')}</span></p><hr/><small>{text(locale,'浮动盈亏 / 收益率','Unrealized P&L / Return')}</small><p className="cc-profit-positive">+$2,826 <span>+14.13%</span></p></div>
        <div className="cc-coin-stack">{stocks.slice(0,4).map(stock=><StockIcon key={stock.symbol} symbol={stock.symbol} size={36}/>)}<span>{text(locale,'示例持仓','Sample position')}</span></div>
      </div>
      <div className="why-card span-2"><span className="card-header-icon">⊕</span><h3 className="card-title">{text(locale,'跨行业','Compare Across')}<br/>{text(locale,'比较公司','Sectors')}</h3><p className="card-desc">{text(locale,'从科技到金融、消费、医疗和能源，按行业理解公司差异。','Explore technology, financials, consumer, healthcare and energy.')}</p>
        <div className="cc-sector-list">{[[text(locale,'科技','Technology'),'AAPL / NVDA'],[text(locale,'金融','Financials'),'JPM / V'],[text(locale,'医疗','Healthcare'),'JNJ'],[text(locale,'能源','Energy'),'XOM']].map(([sector,tickers])=><div key={sector}><span>{sector}</span><strong>{tickers}</strong></div>)}</div>
      </div>
      <div className="why-card span-3 card-4-container"><div><span className="card-header-icon">ϟ</span><h3 className="card-title">{text(locale,'指数走势','Index Trends')}<br/>{text(locale,'把握市场视角','Market Perspective')}</h3><p className="card-desc">{text(locale,'观察标普500、纳斯达克和道琼斯指数，理解个股所处的市场环境。','See the S&P 500, Nasdaq and Dow Jones for context around individual stocks.')}</p><div className="cc-feature-badges">{[text(locale,'指数概览','Index Overview'),text(locale,'行业筛选','Sector Filters'),text(locale,'持仓测算','Position Estimates')].map(label=><span key={label}>{label}</span>)}</div></div>
        <div className="cc-feature-chart"><small>1H　1D　1W　1M　1Y　ALL</small><p>{text(locale,'标普500 · 示例','S&P 500 · Sample')}</p><strong>5,728.80</strong><Spark large duration={6}/></div>
      </div>
      <div className="why-card span-3 card-5-container"><div className="card-5-inner"><div><h3 className="card-title">{text(locale,'专注研究','Research with')}<br/>{text(locale,'保护隐私','Privacy in Mind')}</h3><p className="card-desc">{text(locale,'无需连接证券账户，数量与成本只用于当前页面计算。','No brokerage connection. Shares and costs stay in the current page for calculation.')}</p></div><div className="cc-shield"><div className="cc-security-ring spin-slow"/><svg className="shield-glow float-anim" width="104" height="120" viewBox="0 0 80 90" aria-hidden="true"><path d="M40 4 72 18v27c0 20-14 33-32 41C22 78 8 65 8 45V18Z" fill="#fff3f0" stroke="#ee4901" strokeWidth="3"/><path d="m25 44 10 11 22-24" stroke="#ee4901" strokeWidth="5" fill="none"/></svg></div></div><div className="card-5-footer">{[text(locale,'无需账户授权','No Account Access'),text(locale,'本地计算','Local Calculation'),text(locale,'不保存持仓','No Positions Stored')].map(label=><span key={label}>{label}</span>)}</div></div>
    </Reveal>
  </section>
}
