# 修改指南

品牌：config/brand.ts与.tpl/template.json；文案和股票示例：content/data.ts，中英成对维护；计算规则：position.ts；样式：theme.css的--cc-*令牌。上述路径均相对src/features/site-templates/catalog/stocklens。

新增股票需填写唯一代码、中英文名、美元示例价格、日涨跌、市值、行业、市盈率和色值；数量来自实际数组。行情、目录和测算器复用同一数据源。不要将示例值标成实时行情。

测算器以持股数×股价得市值，股数×平均成本得成本，差额为浮动盈亏，收益率为盈亏/成本。无效数字明确报错；零成本或零数量收益率显示—。此计算不支持做空、费用、税费、分红、拆股和组合风险模型。

动效仍由Hero、Rates、Features、Market、Primitives和CSS管理。新增页面在meta.ts和.tpl/template.json同时注册，保留现有URL兼容；文章业务内容可变，不按旧URL字面推导功能。

日常按影响运行pnpm typecheck、lint、test、build；展示变化刷新相关截图。
