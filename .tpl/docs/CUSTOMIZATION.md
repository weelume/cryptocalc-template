# 修改指南

品牌：src/features/site-templates/catalog/cryptocalc/config/brand.ts 与市场 template.json 同步；不要逐页硬编码。
文案与数据：content/data.ts 的中文和英文成对修改，演示价格统一以美元计价。
主题：theme.css 的 --cc-* 令牌管理主色、玻璃卡片、字号和间距；reference.css 保留参考动画关键帧。字体采用本地 Poppins 400/600/700 和 MiSans 400/700。
动效：Hero 的轨道数据与 CSS 对应；Rates 与 Market 的滚动内容保持重复周期，hover 暂停；Primitives 的 Spark/Count 管理绘制与计数；Features 的盾牌和环线单独循环。
页面：pages/ 增加独立组合，在 meta.ts、.tpl/template.json 同步注册。语言切换在 Shell 保留页面、查询和锚点。
验证：按影响运行 pnpm typecheck、pnpm lint、pnpm test、pnpm build，三端检查 1440×1000、834×1180、390×844 并补测320宽度。
