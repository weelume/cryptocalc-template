'use client'
import {createContext,useContext,type ReactNode} from 'react'
import {brand,type Bilingual} from './config/brand'
export interface CryptoCalcHostConfig {brandName:Bilingual;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Bilingual;marketplaceAriaLabel?:Bilingual;filing?:ReactNode}
const Context=createContext<CryptoCalcHostConfig>({brandName:brand.name,logo:brand.logo,lightLogo:brand.logo})
export function CryptoCalcHostProvider({children,...config}:CryptoCalcHostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const useCryptoCalcHost=()=>useContext(Context)
