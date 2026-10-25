'use client'
import {Shell,type PageContext} from '../components/Shell'
import type {SiteTemplatePageProps} from '../../../types'
import {text} from '../content/data'
import {LocalForm} from '../components/Primitives'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){const context:PageContext={locale,basePath};return <Shell {...context}><section className="cc-inner-page"><span className="cc-eyebrow">CONTACT</span><h1>{text(locale,'一起让换算更简单','Let’s make conversion simpler')}</h1><p className="cc-lead">{text(locale,'分享你的想法。此表单只在本地校验，不会发送或保存你的信息。','Share your ideas. This form only validates locally; it does not send or save your information.')}</p><LocalForm locale={locale} contact/></section></Shell>}
