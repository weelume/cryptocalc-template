'use client'
import {createContext,useContext,type ReactNode} from 'react'
import {brand,type Bilingual} from './config/brand'
export interface StockLensHostConfig {brandName:Bilingual;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Bilingual;marketplaceAriaLabel?:Bilingual;filing?:ReactNode}
const Context=createContext<StockLensHostConfig>({brandName:brand.name,logo:brand.logo,lightLogo:brand.logo})
export function StockLensHostProvider({children,...config}:StockLensHostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const useStockLensHost=()=>useContext(Context)
