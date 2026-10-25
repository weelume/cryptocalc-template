# 验收

验收标准：32条双语路径可达；计算与反向换算正确；非法输入明确报错；搜索、分类与空结果可用；图表周期、FAQ、菜单与语言切换有效；表单只校验；运行素材本地加载；三端与320宽度无横向溢出；保留参考的轨道、滚动、绘图、计数和盾牌动画。

命令：pnpm typecheck、pnpm lint、pnpm test、pnpm build。换算测试覆盖正向、反向、跨币种、非法金额和无效报价。格式检查 node .tpl/tools/check.mjs . 只验证合同，不等于应用验收。

实际结果记录在 .tpl/reports/verification.json；未验证项与动效差异记录在 MOTION.md。截图不是全部交互与动效通过的证明。
