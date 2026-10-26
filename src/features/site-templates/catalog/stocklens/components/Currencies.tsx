'use client'
import {useState} from 'react'
import {stocks,text,type Locale} from '../content/data'
import {StockIcon,Spark,Count,Change} from './Primitives'

export function Currencies({locale}:{locale:Locale}) {
  const [search,setSearch]=useState(''),[sector,setSector]=useState('all'),[sort,setSort]=useState('default')
  const filters=[['all','全部股票','All Stocks'],['technology','科技','Technology'],['finance','金融','Financials'],['consumer','消费','Consumer'],['healthcare','医疗','Healthcare'],['energy','能源','Energy']]
  const visible=stocks.filter(stock=>(sector==='all'||stock.category===sector)&&`${stock.symbol} ${stock.name.zh} ${stock.name.en}`.toLowerCase().includes(search.toLowerCase())).toSorted((a,b)=>sort==='name'?a.name.en.localeCompare(b.name.en):sort==='price'?b.price-a.price:sort==='change'?b.change-a.change:0)
  return <section className="sc-section" id="stocks"><div className="sc-container">
    <span className="sc-pill">{stocks.length} {text(locale,'只美股示例','SAMPLE US EQUITIES')}</span>
    <h2 className="sc-title">{text(locale,'发现值得','Explore ')}<span className="sc-title-orange">{text(locale,'研究的公司','US Equities')}</span></h2>
    <p className="sc-subtitle">{text(locale,'按公司、行业与估值 建立你的研究视角','Build a research perspective through companies, sectors and valuations.')}<br/>{text(locale,'所有报价和指标均为固定示例','All prices and metrics are fixed demonstration data.')}</p>
    <div className="sc-search-container"><span className="sc-search-icon">⌕</span><input className="sc-search-input" type="search" value={search} onChange={e=>setSearch(e.target.value)} aria-label={text(locale,'搜索股票','Search stocks')} placeholder={text(locale,'搜索股票代码或公司名称…','Search ticker or company name...')}/></div>
    <div className="sc-filters-row"><div className="sc-filters-left">{filters.map(([id,zh,en])=><button key={id} aria-pressed={sector===id} className={'sc-filter-btn '+(sector===id?'active':'')} onClick={()=>setSector(id)}>{text(locale,zh,en)}</button>)}</div>
      <select className="sc-sort-btn" value={sort} aria-label={text(locale,'排序','Sort')} onChange={e=>setSort(e.target.value)}><option value="default">{text(locale,'默认顺序','Default Order')}</option><option value="price">{text(locale,'按股价排序','Share Price')}</option><option value="change">{text(locale,'按涨跌幅排序','Daily Change')}</option><option value="name">{text(locale,'按名称排序','Company Name')}</option></select>
    </div>
    <div className="sc-grid" aria-live="polite">{visible.map((stock,i)=><article className="sc-card" key={stock.symbol} style={{animationDelay:i*.07+'s'}}><div className="sc-coin-info"><StockIcon symbol={stock.symbol} size={42}/><div className="sc-coin-names"><h3 className="sc-coin-name">{stock.name[locale]}</h3><span className="sc-coin-sym">{stock.symbol} · USD</span></div></div><div className="sc-price-row"><strong className="sc-price">$<Count value={stock.price}/></strong><Change value={stock.change}/></div><Spark color={stock.change<0?'#ef4444':'#10b981'}/><div className="sc-footer"><span className="sc-footer-label">{text(locale,'市值','Market Cap')}</span><span className="sc-footer-val">${stock.cap}</span></div><div className="sc-footer"><span className="sc-footer-label">{text(locale,'市盈率（示例）','P/E (sample)')}</span><span className="sc-footer-val">{stock.pe.toFixed(1)}×</span></div></article>)}{visible.length===0&&<p className="cc-empty">{text(locale,'没有匹配的股票，请调整搜索或行业条件。','No matching stocks. Try another ticker, company name or sector.')}</p>}</div>
    <div className="sc-banner">{[[String(stocks.length),text(locale,'精选美股示例','Sample US Equities')],['5',text(locale,'行业视角','Sector Perspectives')],['USD',text(locale,'统一美元计价','USD Denominated')],[text(locale,'本地','Local'),text(locale,'持仓盈亏测算','Position P&L Estimates')]].map(([value,label])=><div className="sc-banner-item" key={value}><div className="sc-banner-text"><strong className="sc-banner-title">{value}</strong><span className="sc-banner-desc">{label}</span></div></div>)}</div>
  </div></section>
}
