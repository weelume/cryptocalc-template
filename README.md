# CryptoCalc

中英双语加密资产换算界面演示，包含计算器、市场概览、币种目录、功能、FAQ、博客与三篇指南、关于、联系和五类政策页面，共16个页面、32条语言路径。

首读 .tpl/README.md、.tpl/template.json、.tpl/project.json。运行素材全部在 public/templates/cryptocalc，展示截图在 .tpl/assets。

Node 24.16.0、pnpm 9.15.4，React / Next.js / Framer Motion。执行 pnpm install --frozen-lockfile；pnpm dev 默认 http://127.0.0.1:43560；生产 pnpm build 后 pnpm start。Ctrl+C 停止当前服务。英文 /en，中文 /。可通过 PORT 与 HOSTNAME 修改本机端口与绑定地址。

pnpm typecheck、pnpm lint、pnpm test、pnpm build 用于检查；pnpm bundle 创建共享运行包。安装和构建缓存不属于交付源码。

所有报价、评价、统计为固定演示内容；动画不是实时行情。表单只在浏览器校验，不发送、不保存。没有账户、钱包、支付、数据库或外部行情服务。

修改入口：src/features/site-templates/catalog/cryptocalc/config/brand.ts、content/data.ts、theme.css、components/、pages/ 和 meta.ts。详见 .tpl/docs/CUSTOMIZATION.md。

设计参考：https://jiro.build/templates/fintech/crypto-exchange-calculator-landing-page-cryptocalc 。公开参考设计的商业再分发许可尚未核实，listed=false，详见 .tpl/docs/LICENSE.md。
