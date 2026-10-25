export interface Currency {symbol:string;price:number}
/** 示例报价统一以美元计价；无效输入显式拒绝，不降级成成功的零值。 */
export function convertAmount(amount:string,source:Currency,target:Currency):number|null {
 if(!/^\d+(?:\.\d*)?$/.test(amount.trim()))return null
 const value=Number(amount)
 if(!Number.isFinite(value)||value<0||!Number.isFinite(source.price)||!Number.isFinite(target.price)||source.price<=0||target.price<=0)return null
 const result=value*source.price/target.price
 return Number.isFinite(result)?result:null
}
