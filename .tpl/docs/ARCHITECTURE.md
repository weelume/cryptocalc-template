# 架构

单一 Next.js 应用，无后端和数据库。src/app/[[...slug]]/page.tsx 解析语言和页面，从 src/features/site-templates/catalog/cryptocalc/meta.ts 注册表加载独立页面。页面组合共用 Shell 和业务组件。

config/brand.ts 管理品牌；content/data.ts 管理可编辑双语数据；conversion.ts 是纯换算规则；theme.css 管理主题、字体和响应式；reference.css 保留参考的区块样式及动效节奏。components/ 的 Calculator、Hero、Rates、Features、Market、Currencies、Faq 和 Primitives 按职责组织。

host.tsx 提供通用品牌和页脚注入，不依赖具体消费方。共享包通过 /template 和 /host 导出；运行素材属于 public/templates/cryptocalc，展示图属于 .tpl/assets。

客户端本地状态只用于金额、币种、筛选、周期、FAQ 和表单提示。不访问外部服务、不存储业务数据。
