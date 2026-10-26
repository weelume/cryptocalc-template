'use client'
import {Shell,type PageContext} from '../components/Shell'
import type {SiteTemplatePageProps} from '../../../types'
import {text} from '../content/data'
import {LocalForm} from '../components/Primitives'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){const context:PageContext={locale,basePath};return <Shell {...context}><section className="cc-inner-page"><span className="cc-eyebrow">CONTACT STOCKLENS</span><h1>{text(locale,'聊聊你的股票研究体验','Share your research experience')}</h1><p className="cc-lead">{text(locale,'关于市场概览、股票目录或持仓测算，欢迎分享你的想法。表单仅本地校验，不发送、不保存，也不提供投资咨询。','Tell us about the market overview, stock explorer or position calculator. This form validates locally, sends and stores nothing, and provides no investment consultation.')}</p><LocalForm locale={locale} contact/></section></Shell>}
