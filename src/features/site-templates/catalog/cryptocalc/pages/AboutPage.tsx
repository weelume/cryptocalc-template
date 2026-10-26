'use client'
import {Shell,type PageContext} from '../components/Shell'
import type {SiteTemplatePageProps} from '../../../types'
import {text} from '../content/data'
import {Features} from '../components/Features'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){const context:PageContext={locale,basePath};return <Shell {...context}><section className="cc-inner-page"><span className="cc-eyebrow">ABOUT STOCKLENS</span><h1>{text(locale,'让每一次股票研究 更有条理','A clearer framework for stock research')}</h1><p className="cc-lead">{text(locale,'StockLens 把市场概览、公司估值与持仓测算放在同一处，帮助你从零散信息中建立自己的研究视角。','StockLens brings market context, company valuation and position estimates together to help you organize independent research.')}</p><p>{text(locale,'这是一套面向美股研究的双语界面演示。行情、指数和估值指标使用固定示例，不提供证券交易、账户连接或个股推荐。','This bilingual US equity research interface uses fixed sample prices, indices and valuations. It provides no securities trading, account connections or stock recommendations.')}</p></section><Features {...context}/></Shell>}
