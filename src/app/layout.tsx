import {Suspense,type ReactNode} from 'react'
import './globals.css'
export const metadata={title:'CryptoCalc · 加密资产换算',description:'中英文加密资产计算器与市场数据演示'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body><Suspense>{children}</Suspense></body></html>}
