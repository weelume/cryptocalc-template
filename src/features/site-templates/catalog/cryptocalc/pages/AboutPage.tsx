'use client'
import {Shell,type PageContext} from '../components/Shell'
import type {SiteTemplatePageProps} from '../../../types'
import {text} from '../content/data'
import {Features} from '../components/Features'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){const context:PageContext={locale,basePath};return <Shell {...context}><section className="cc-inner-page"><span className="cc-eyebrow">ABOUT CRYPTOCALC</span><h1>{text(locale,'让数字资产 更容易理解','Making digital assets easier to understand')}</h1><p className="cc-lead">{text(locale,'我们相信清晰的数据和简单的工具能降低理解数字资产的门槛。CryptoCalc 将换算、市场概览与知识指南整合成一致的使用体验。','We believe clear data and simple tools make digital assets easier to understand. CryptoCalc brings conversions, market overviews and practical guides into one consistent experience.')}</p><p>{text(locale,'这是独立的双语界面演示，不提供交易、账户或实时行情服务。','This is an independent bilingual interface demonstration without trading, accounts or live market data.')}</p></section><Features {...context}/></Shell>}
