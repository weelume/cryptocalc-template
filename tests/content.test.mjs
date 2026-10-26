import test from 'node:test'
import assert from 'node:assert/strict'
import {readdir,readFile} from 'node:fs/promises'
const root=new URL('../src/',import.meta.url)
async function files(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=new URL(e.name+(e.isDirectory()?'/':''),dir);if(e.isDirectory())out.push(...await files(p));else if(/\.tsx?$/.test(e.name))out.push(p)}return out}
test('equity UI has no legacy crypto business copy',async()=>{for(const p of await files(root)){const s=await readFile(p,'utf8');assert.equal(/加密资产|加密货币|币种|比特币|以太坊|Bitcoin|USDT|CoinGecko|CoinMarketCap|BINANCE|KRAKEN|Crypto Calculator|cryptocurrency/i.test(s),false,p.pathname)}})
