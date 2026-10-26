import {Suspense,type ReactNode} from 'react'
import './globals.css'
export const metadata={title:'StockLens · 美股分析',description:'中英文美股市场、公司估值与持仓盈亏分析演示'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body><Suspense>{children}</Suspense></body></html>}
