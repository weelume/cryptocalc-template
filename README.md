# StockLens 美股分析

面向美股研究的中英双语界面演示，包含市场指数、股票目录、行业筛选、公司市值/市盈率、持仓盈亏测算、功能、FAQ、博客与三篇指南、关于、联系和政策页面。共16个页面、32条语言路径。

首读 .tpl/README.md、.tpl/template.json、.tpl/project.json。Node24.16.0、pnpm9.15.4。pnpm install --frozen-lockfile；pnpm dev 默认 http://127.0.0.1:43560；生产 pnpm build 后 pnpm start。Ctrl+C停止当前服务。PORT/HOSTNAME可调整端口与地址。

检查：pnpm typecheck、pnpm lint、pnpm test、pnpm build；pnpm bundle生成共享运行包。沿用React/Next.js/Framer Motion，不新增依赖。

修改入口位于 src/features/site-templates/catalog/stocklens：config/brand.ts、content/data.ts、position.ts、theme.css、components/、pages/、meta.ts。模板ID为stocklens，包名为stocklens-template，业务与品牌均为StockLens。

演示包含12只美股和5个行业，报价、指数与估值均为固定样例，未接入实时行情。持仓测算不包括佣金、税款、分红、拆股及汇率变化，不提供账户连接、交易或推荐。零成本或零持仓收益率显示无定义。表单只本地校验，不发送、不保存。

运行素材本地托管；股票图标为自绘代码标记，不使用第三方公司Logo。设计沿用既有橙色玻璃与轨道动效；商业再分发许可未核实，listed=false。详见 .tpl/docs/LICENSE.md。
