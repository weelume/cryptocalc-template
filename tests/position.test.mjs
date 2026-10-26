import test from 'node:test'
import assert from 'node:assert/strict'
import {calculatePosition} from '../src/features/site-templates/catalog/cryptocalc/position.ts'
test('profitable equity position in USD',()=>{const r=calculatePosition('100','200',228.26);assert.equal(r.marketValue,22826);assert.equal(r.costBasis,20000);assert.equal(r.profitLoss,2826);assert.ok(Math.abs(r.returnPercent-14.13)<1e-10)})
test('loss-making and fractional positions',()=>{const r=calculatePosition('2.5','250',200);assert.deepEqual(r,{marketValue:500,costBasis:625,profitLoss:-125,returnPercent:-20})})
test('zero cost or zero position has no percentage return',()=>{assert.equal(calculatePosition('0','200',228.26).returnPercent,null);assert.equal(calculatePosition('1','0',228.26).returnPercent,null)})
test('invalid numbers and non-positive prices are rejected',()=>{for(const bad of ['', '-1','NaN','Infinity','1,000','1e999']){assert.equal(calculatePosition(bad,'200',228.26),null);assert.equal(calculatePosition('100',bad,228.26),null)}for(const price of [0,-1,Infinity,NaN])assert.equal(calculatePosition('100','200',price),null);assert.equal(calculatePosition('9'.repeat(309),'200',228.26),null)})
test('percentage overflow is rejected',()=>assert.equal(calculatePosition('1','0.'+'0'.repeat(318)+'1',228.26),null))
