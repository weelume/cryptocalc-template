import test from 'node:test'
import assert from 'node:assert/strict'
import {convertAmount} from '../src/features/site-templates/catalog/cryptocalc/conversion.ts'
const btc={symbol:'BTC',price:63636.94},usd={symbol:'USD',price:1},eth={symbol:'ETH',price:3091.56}
test('BTC/USD quote and reversed round trip',()=>{assert.equal(convertAmount('1',btc,usd),63636.94);assert.equal(convertAmount('63636.94',usd,btc),1)})
test('cross quote uses common USD price',()=>assert.ok(Math.abs(convertAmount('2',btc,eth)-2*63636.94/3091.56)<1e-9))
test('invalid amounts and quotes are rejected explicitly',()=>{for(const value of ['', '-1','Infinity','abc','1,2','1e999'])assert.equal(convertAmount(value,btc,usd),null);assert.equal(convertAmount('1',btc,{symbol:'BAD',price:0}),null);assert.equal(convertAmount('0',btc,usd),0)})
