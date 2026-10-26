'use client'
import {Shell,type PageContext} from '../components/Shell'
import type {SiteTemplatePageProps} from '../../../types'
import {articles,text} from '../content/data'
import Link from 'next/link'
import {pageHref} from '../components/Shell'
export default function Page({locale='zh',basePath}:SiteTemplatePageProps){const context:PageContext={locale,basePath};return <Shell {...context}><article className="cc-inner-page"><Link className="cc-eyebrow" href={pageHref(basePath,'blog')}>{text(locale,'资讯与指南','Resources')}</Link><h1>{articles[1].title[locale]}</h1><p className="cc-lead">{articles[1].summary[locale]}</p><div className="cc-article-copy">{articles[1].paragraphs.map((p,i)=><p key={i}>{p[locale]}</p>)}</div></article></Shell>}
