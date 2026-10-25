'use client'
import {Shell,type PageContext} from '../components/Shell'
import type {SiteTemplatePageProps} from '../../../types'
import Link from 'next/link'
import {pageHref} from '../components/Shell'
import {articles,text} from '../content/data'
import {Spark} from '../components/Primitives'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){const context:PageContext={locale,basePath};return <Shell {...context}><section className="cc-inner-page"><span className="cc-eyebrow">CRYPTOCALC JOURNAL</span><h1>{text(locale,'数字资产 从这里读懂','A clearer view of digital assets')}</h1><p className="cc-lead">{text(locale,'从换算基础到数据解读，用清晰的知识陪伴每一次探索。','Practical guides to conversion, market data and digital asset security.')}</p><div className="cc-blog-grid">{articles.map((a,i)=><Link className="cc-article-card" key={a.slug} href={pageHref(basePath,'blog/'+a.slug)}><div className="cc-article-art"><Spark period={i}/></div><small>2026 · {text(locale,'指南','GUIDE')}</small><h2>{a.title[locale]}</h2><p>{a.summary[locale]}</p><span>{text(locale,'阅读文章','Read article')}</span></Link>)}</div></section></Shell>}
