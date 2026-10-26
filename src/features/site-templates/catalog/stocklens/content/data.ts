import type {Bilingual} from '../config/brand'

export type Locale = 'zh' | 'en'
export const text = (locale: Locale, zh: string, en: string) => locale === 'en' ? en : zh
export interface Stock {
  symbol: string
  name: Bilingual
  price: number
  change: number
  cap: string
  category: 'technology' | 'finance' | 'consumer' | 'healthcare' | 'energy'
  pe: number
  color: string
}
/** 全站共用固定美元报价，行业、观察列表与测算器不重复维护价格。 */
export const stocks: Stock[] = [
  {symbol:'AAPL',name:{zh:'苹果',en:'Apple'},price:228.26,change:1.24,cap:'3.47T',category:'technology',pe:34.7,color:'#334155'},
  {symbol:'MSFT',name:{zh:'微软',en:'Microsoft'},price:428.76,change:.85,cap:'3.19T',category:'technology',pe:36.4,color:'#2563eb'},
  {symbol:'NVDA',name:{zh:'英伟达',en:'NVIDIA'},price:139.56,change:2.18,cap:'3.42T',category:'technology',pe:64.8,color:'#65a30d'},
  {symbol:'AMZN',name:{zh:'亚马逊',en:'Amazon'},price:187.54,change:-.32,cap:'1.97T',category:'consumer',pe:42.6,color:'#d97706'},
  {symbol:'GOOGL',name:{zh:'谷歌',en:'Alphabet'},price:176.45,change:1.12,cap:'2.16T',category:'technology',pe:24.3,color:'#dc2626'},
  {symbol:'META',name:{zh:'Meta',en:'Meta Platforms'},price:578.16,change:1.62,cap:'1.46T',category:'technology',pe:28.5,color:'#0284c7'},
  {symbol:'TSLA',name:{zh:'特斯拉',en:'Tesla'},price:252.54,change:-1.35,cap:'806.42B',category:'consumer',pe:68.2,color:'#e11d48'},
  {symbol:'JPM',name:{zh:'摩根大通',en:'JPMorgan Chase'},price:224.35,change:.92,cap:'636.21B',category:'finance',pe:12.4,color:'#1e40af'},
  {symbol:'V',name:{zh:'维萨',en:'Visa'},price:289.17,change:.72,cap:'569.84B',category:'finance',pe:30.1,color:'#4338ca'},
  {symbol:'BRK.B',name:{zh:'伯克希尔',en:'Berkshire Hathaway'},price:465.31,change:.48,cap:'1.00T',category:'finance',pe:21.6,color:'#475569'},
  {symbol:'JNJ',name:{zh:'强生',en:'Johnson & Johnson'},price:160.22,change:.36,cap:'385.64B',category:'healthcare',pe:18.2,color:'#be123c'},
  {symbol:'XOM',name:{zh:'埃克森美孚',en:'Exxon Mobil'},price:119.17,change:-.64,cap:'529.17B',category:'energy',pe:14.6,color:'#b45309'},
]
export const faq: [Bilingual,Bilingual][] = [
  [{zh:'这个股票分析工具能做什么？',en:'What can this stock analysis tool do?'},{zh:'你可以浏览美股市场概览、按行业筛选个股，并根据持股数量、平均成本和示例股价测算持仓金额及浮动盈亏。',en:'Explore a US market overview, filter equities by sector, and estimate position value and unrealized profit or loss from shares, average cost and sample prices.'}],
  [{zh:'持仓盈亏是如何计算的？',en:'How is position profit or loss calculated?'},{zh:'持仓市值等于持股数量乘以参考股价，持仓成本等于数量乘以平均买入价，浮动盈亏是两者之差。收益率使用浮动盈亏除以持仓成本，不包含费用、税款、分红或汇率变化。',en:'Position value is shares multiplied by reference price; cost basis is shares multiplied by average purchase price. Unrealized P&L is the difference. Return is P&L divided by cost basis, excluding fees, taxes, dividends and currency effects.'}],
  [{zh:'当前支持哪些股票？',en:'Which stocks are included?'},{zh:'演示包含苹果、微软、英伟达、亚马逊等12只美股，覆盖科技、金融、消费、医疗和能源行业。目录中的数量来自实际示例列表。',en:'The demo includes 12 US equities such as Apple, Microsoft, NVIDIA and Amazon across technology, financials, consumer, healthcare and energy. Counts reflect the actual sample list.'}],
  [{zh:'行情和估值数据是实时的吗？',en:'Are prices and valuation metrics live?'},{zh:'不是。所有股价、指数、市值和市盈率均为固定示例数据。动画仅展示界面效果，不表示实时更新，也未接入券商或行情服务。',en:'No. Prices, indices, market caps and P/E ratios are fixed sample data. Animations illustrate the interface, not live updates. No broker or market data feed is connected.'}],
  [{zh:'可以查看不同的股票行业吗？',en:'Can I compare different sectors?'},{zh:'可以在股票目录按行业筛选，也可以搜索股票代码或中英文公司名，结合市值与市盈率理解公司规模和估值。',en:'Filter the equity directory by sector, or search by ticker and company name. Market capitalization and P/E offer context for company scale and valuation.'}],
  [{zh:'是否需要登录或连接证券账户？',en:'Do I need to sign in or connect a brokerage account?'},{zh:'不需要。测算在浏览器中完成，不读取持仓账户，不提交订单，也不保存你输入的数量或成本。',en:'No. Calculations run in your browser, without reading brokerage accounts, placing orders or saving entered shares and costs.'}],
  [{zh:'可以用手机查看和测算吗？',en:'Can I analyze stocks on mobile?'},{zh:'支持桌面、平板和手机，持仓测算、股票搜索、行业筛选和常见问题支持触控及键盘操作。',en:'Desktop, tablet and mobile layouts support touch and keyboard for position estimates, stock search, sector filters and FAQ.'}],
  [{zh:'如何理解市盈率与市场趋势？',en:'How should I interpret P/E and market trends?'},{zh:'市盈率应结合盈利质量、增长预期和行业特点理解。指数表现描述一组股票的变化，不能直接代表你的组合收益。详见资讯与指南。',en:'Interpret P/E alongside earnings quality, growth expectations and sector context. Index performance describes a basket of stocks, not your own portfolio return. See our research guides.'}],
  [{zh:'测算结果是否构成投资建议？',en:'Are these estimates investment advice?'},{zh:'不构成。此站用于界面演示和基础计算，不能替代投资研究或专业意见。真实投资需使用经核实的行情、费用及风险信息。',en:'No. This site demonstrates an interface and basic calculations, not investment research or professional advice. Real investment decisions require verified prices, costs and risk information.'}],
]
export const articles = [
  {slug:'understanding-conversions',title:{zh:'从持仓成本到浮动盈亏',en:'From cost basis to unrealized P&L'},summary:{zh:'用持股数量、平均成本和参考股价，读懂一笔持仓的表现。',en:'Understand a position through shares, average cost and reference price.'},paragraphs:[
    {zh:'持仓分析从三个输入开始：股票、持股数量和平均买入价。以100股、每股成本200美元、参考股价228.26美元为例，成本为20,000美元，市值为22,826美元，浮动盈利为2,826美元。',en:'Start with the ticker, number of shares and average purchase price. At 100 shares, a $200 average cost and a $228.26 reference price, cost basis is $20,000, value is $22,826 and unrealized profit is $2,826.'},
    {zh:'浮动收益率为盈利除以成本，上述例子为14.13%。收益率描述相对变化，绝对盈亏描述金额，两者需要结合仓位规模阅读。',en:'Return is profit divided by cost basis: 14.13% in this example. Percentage return describes relative change; dollar P&L describes size. Read both alongside position size.'},
    {zh:'简化测算不包括佣金、税费、分红、拆股或汇率变化。真实账户核算应使用券商成交记录并按实际费用调整。本演示不保存你的输入。',en:'This simplified estimate excludes commissions, taxes, dividends, stock splits and currency movements. Real account analysis needs broker execution records and actual costs. The demo does not save your inputs.'},
  ]},
  {slug:'market-cap-and-volume',title:{zh:'把市值与估值放在一起看',en:'Reading market cap and valuation together'},summary:{zh:'理解公司规模、市盈率与行业差异，避免只看股价高低。',en:'Look beyond share price to company scale, P/E and sector differences.'},paragraphs:[
    {zh:'公司市值一般等于股价乘以流通在外股份数。每股价格受股本结构影响，低价股不一定便宜，高价股也不一定昂贵。',en:'Market capitalization generally equals share price multiplied by shares outstanding. Share price depends on capital structure: a low-priced share is not necessarily cheap, nor a high-priced one expensive.'},
    {zh:'市盈率是股价相对于每股盈利的倍数。比较时应明确是历史盈利还是预期盈利，并结合行业、盈利稳定性与增长预期。亏损企业的市盈率可能没有比较意义。',en:'P/E compares share price to earnings per share. Distinguish trailing and forward earnings, then consider sector, earnings consistency and expected growth. P/E may not be meaningful for unprofitable firms.'},
    {zh:'本目录中的市值和市盈率均为教学示例，不用于证券定价。正式研究还需阅读财报、现金流、债务结构与风险披露。',en:'Market caps and P/E ratios in this directory are educational samples, not security valuations. Real research also requires financial statements, cash flow, debt structure and risk disclosures.'},
  ]},
  {slug:'privacy-and-security',title:{zh:'用仓位和分散理解组合风险',en:'Understanding position size and diversification'},summary:{zh:'关注行业集中度、回撤和自己的资金安排。',en:'Consider sector concentration, drawdowns and your capital needs.'},paragraphs:[
    {zh:'仓位决定一只股票波动对组合的影响。即使持有多只股票，如果它们集中在相同行业或增长主题，组合仍可能面对高度相关的风险。',en:'Position size determines how much one stock affects your portfolio. Holding several stocks can still leave highly correlated risk if they share a sector or growth theme.'},
    {zh:'浮动盈利不是已经实现的回报。分析时应考虑不同情景下的潜在回撤、资金使用期限，以及能够承受的损失范围。',en:'Unrealized gains are not realized returns. Consider potential drawdowns across scenarios, your time horizon and the level of loss you can tolerate.'},
    {zh:'本工具只帮助理解单笔持仓的简单盈亏，不计算完整组合风险、波动率或相关性，也不推荐股票或交易时点。',en:'This tool explains simple single-position P&L. It does not calculate full portfolio risk, volatility or correlation, and recommends no stocks or trading times.'},
  ]},
]
