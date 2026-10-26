# 架构

单一Next.js应用，无后端和数据库。src/app/[[...slug]]/page.tsx按语言与slug加载独立页面。模板模块位于src/features/site-templates/catalog/stocklens。

config/brand.ts管理品牌；content/data.ts管理美股样例、双语FAQ与研究指南；position.ts负责纯持仓计算；theme.css管理主题与新测算器布局，reference.css保留既有区块动画。components/各自维护市场、股票筛选、行情滚动、持仓测算等职责；pages/只组合区块。

所有示例股价统一美元计价。图标从同一股票数据集读取颜色与代码；未知代码显式报错，不静默显示其他图标。数量与成本仅保存在页面内存，页面刷新即重置。

host.tsx为通用品牌/页脚注入；共享包继续通过/template和/host导出。运行素材在public/templates/stocklens；展示截图在.tpl/assets。模板ID、共享包名与模块目录统一为stocklens。
