import type {Bilingual} from '../config/brand'
export type Locale='zh'|'en'
export const text=(locale:Locale,zh:string,en:string)=>locale==='en'?en:zh
export interface Coin {symbol:string;name:Bilingual;price:number;change:number;cap:string;category:'popular'|'stable'|'layer1'|'memes'|'defi'|'web3'}
export const coins:Coin[]=[
 {symbol:'BTC',name:{zh:'比特币',en:'Bitcoin'},price:63636.94,change:1.24,cap:'1.25T',category:'popular'},
 {symbol:'ETH',name:{zh:'以太坊',en:'Ethereum'},price:3091.56,change:.85,cap:'371.45B',category:'layer1'},
 {symbol:'USDT',name:{zh:'泰达币',en:'Tether'},price:1,change:.01,cap:'112.35B',category:'stable'},
 {symbol:'BNB',name:{zh:'币安币',en:'BNB'},price:601.35,change:1.18,cap:'88.74B',category:'layer1'},
 {symbol:'SOL',name:{zh:'索拉纳',en:'Solana'},price:145.32,change:2.16,cap:'64.21B',category:'layer1'},
 {symbol:'USDC',name:{zh:'美元稳定币',en:'USD Coin'},price:1,change:.02,cap:'32.15B',category:'stable'},
 {symbol:'XRP',name:{zh:'瑞波币',en:'XRP'},price:.4821,change:1.35,cap:'26.45B',category:'web3'},
 {symbol:'ADA',name:{zh:'艾达币',en:'Cardano'},price:.452,change:.92,cap:'16.21B',category:'layer1'},
 {symbol:'DOGE',name:{zh:'狗狗币',en:'Dogecoin'},price:.1278,change:3.28,cap:'18.47B',category:'memes'},
 {symbol:'MATIC',name:{zh:'多边形',en:'Polygon'},price:.543,change:1.62,cap:'5.12B',category:'web3'},
 {symbol:'UNI',name:{zh:'Uniswap',en:'Uniswap'},price:7.54,change:1.12,cap:'4.52B',category:'defi'},
 {symbol:'LTC',name:{zh:'莱特币',en:'Litecoin'},price:78.59,change:-.32,cap:'5.87B',category:'popular'},
]
export const fiats=[{symbol:'USD',name:{zh:'美元',en:'US Dollar'},price:1},{symbol:'EUR',name:{zh:'欧元',en:'Euro'},price:1.08},{symbol:'GBP',name:{zh:'英镑',en:'British Pound'},price:1.27},{symbol:'CNY',name:{zh:'人民币',en:'Chinese Yuan'},price:.14},{symbol:'BDT',name:{zh:'孟加拉塔卡',en:'Bangladeshi Taka'},price:.0085}]
export const faq:[Bilingual,Bilingual][]=[
 [{zh:'什么是加密资产计算器？',en:'What is a crypto calculator?'},{zh:'加密资产计算器帮助你在加密货币与法定货币之间换算，用于理解价格、投资组合及交易对。本模板使用固定示例汇率，不提供实时行情或交易服务。',en:'A crypto calculator converts between cryptocurrencies and fiat currencies for understanding prices, portfolios and trading pairs. This template uses fixed demonstration rates, without live quotes or trading.'}],
 [{zh:'换算结果准确吗？',en:'How accurate is the conversion?'},{zh:'结果按照页面标明的示例汇率计算，展示时进行四舍五入。实际成交价格还受手续费、点差和市场波动影响。',en:'Results use the displayed demonstration rate and are rounded for display. Actual execution prices also depend on fees, spreads and market movements.'}],
 [{zh:'支持哪些加密资产？',en:'Which cryptocurrencies are supported?'},{zh:'演示包含 BTC、ETH、USDT、BNB、SOL 等币种，可在支持币种中搜索和筛选。500+ 为参考设计中的产品展示文案，不代表当前演示接入数量。',en:'The demo includes BTC, ETH, USDT, BNB, SOL and other listed assets. Search and filter the supported coins. The 500+ figure is presentation copy from the reference design, not a live integration count.'}],
 [{zh:'价格是否实时更新？',en:'Are the prices updated in real-time?'},{zh:'当前是本地演示数据。数字计数与图表动画只展示界面效果，不表示联网更新。正式接入需配置可信行情服务。',en:'This is local demonstration data. Number counters and chart animations illustrate the interface and do not represent network updates. Production use requires a trusted market data provider.'}],
 [{zh:'需要创建账户吗？',en:'Do I need to create an account to use the calculator?'},{zh:'无需账户即可使用换算器。本模板不创建账户、不连接钱包、不执行交易。',en:'No account is needed. This template does not create accounts, connect wallets or execute transactions.'}],
 [{zh:'可以在手机上使用吗？',en:'Can I use the calculator on mobile devices?'},{zh:'支持桌面、平板和手机，使用同一套页面。菜单、换算、筛选及常见问题均可通过触控和键盘操作。',en:'The same responsive pages work on desktop, tablet and mobile. Menus, conversion, filters and FAQ support touch and keyboard.'}],
 [{zh:'计算器可以免费使用吗？',en:'Is the crypto calculator free to use?'},{zh:'本地演示中的换算功能免费，不要求付款或订阅。',en:'The local demonstration calculator is free and requires no payment or subscription.'}],
 [{zh:'价格数据来自哪里？',en:'Where does the price data come from?'},{zh:'本演示采用固定示例数据，未连接 CoinGecko、CoinMarketCap 或交易所。底部名称只是原设计的展示内容。',en:'The demo uses fixed sample data and is not connected to CoinGecko, CoinMarketCap or exchanges. Partner names in the footer are presentation content only.'}],
 [{zh:'可以嵌入自己的网站吗？',en:'Can I embed this calculator on my website?'},{zh:'技术上可将共享模块集成到 React / Next.js 项目。使用前需核实参考设计及全部素材的使用许可。',en:'The shared module can technically be integrated into a React / Next.js project. Verify the rights to the reference design and all assets before using it.'}],
]
export const articles=[
 {slug:'understanding-conversions',title:{zh:'理解加密资产换算',en:'Understanding crypto conversions'},summary:{zh:'从报价方向、精度与手续费开始，读懂换算结果。',en:'Read a conversion correctly through quote direction, precision and fees.'},paragraphs:[{zh:'换算基于同一计价货币中的价格比值。将发送金额乘以发送币种的美元价格，再除以接收币种的美元价格，就能得到理论换算结果。',en:'A conversion uses the ratio of prices in a common quote currency. Multiply the amount by the source USD price, then divide by the destination USD price.'},{zh:'显示精度不同于结算精度。小额资产需要更多小数位，实际业务中应使用明确的舍入规则和精确十进制运算。',en:'Display precision differs from settlement precision. Low-priced assets need more decimals; production systems need explicit rounding and precise decimal arithmetic.'},{zh:'本演示的报价为固定样例，仅用于页面与交互展示。实际兑换应核对最新报价、费用与服务条款。',en:'Quotes in this demo are fixed samples for interface presentation. Check current quotes, fees and service terms before an actual exchange.'}]},
 {slug:'market-cap-and-volume',title:{zh:'市值与成交量怎么看',en:'Reading market cap and volume'},summary:{zh:'理解总市值、24 小时成交量与市场占比。',en:'Understand total capitalization, 24-hour volume and dominance.'},paragraphs:[{zh:'市值通常等于流通供应量乘以资产价格。它用于描述市场规模，不等同于真实可变现的资金规模。',en:'Market capitalization is generally circulating supply multiplied by price. It describes scale rather than immediately realizable liquidity.'},{zh:'成交量反映特定时间范围内的交易活动，不同数据源、交易对及统计方式会产生差异。',en:'Volume describes trading activity over a defined period. Sources, trading pairs and methodologies produce different figures.'},{zh:'切换图表时间范围可以观察走势的不同尺度。本模板的曲线与数字均为示意，不构成市场判断依据。',en:'Switching chart periods shows different time scales. Curves and numbers in this template are illustrative and are not a basis for market decisions.'}]},
 {slug:'privacy-and-security',title:{zh:'安全使用换算工具',en:'Using conversion tools safely'},summary:{zh:'识别演示数据，保护钱包与个人信息。',en:'Recognize demo data and protect wallet and personal information.'},paragraphs:[{zh:'计算价格无需助记词、私钥或钱包签名。遇到要求提供这些信息的页面，应立即停止操作。',en:'Calculating prices does not require a seed phrase, private key or wallet signature. Stop if a page requests them.'},{zh:'本演示不收集钱包信息。联系和订阅表单仅在浏览器中校验，不发送也不保存。',en:'This demo collects no wallet information. Contact and subscription forms only validate in the browser; they do not send or store submissions.'},{zh:'真实行情接入应在独立服务中完成，记录时间戳及数据来源，并在失败时给出明确错误。',en:'A real quote integration should use a separate service, record timestamps and sources, and expose explicit errors when requests fail.'}]},
]
