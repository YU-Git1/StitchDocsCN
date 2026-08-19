# Stitch 文档中文化实现计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**目标：** 将 Stitch 文档站的公开页面整理为结构一致、可浏览的中文静态文档站。

**架构：** 使用传统多文件 HTML + CSS + JS。页面数据集中保存在 `scripts/content.js`，通过统一模板渲染所有文档路径；侧栏、栏目切换、目录、搜索和主题切换由 `scripts/app.js` 提供。

**技术栈：** 原生 HTML、CSS、JavaScript；Tailwind CSS CDN 作为轻量工具类补充；无需构建依赖。

---

### 任务 1：建立静态站点骨架

**文件：** `outputs/stitch-docs-cn/index.html`、`outputs/stitch-docs-cn/styles.css`、`outputs/stitch-docs-cn/scripts/app.js`

完成统一布局、响应式侧栏、顶部栏、内容区和基础交互。

### 任务 2：录入中文文档内容

**文件：** `outputs/stitch-docs-cn/scripts/content.js`

为 Learn、MCP、SDK、DESIGN.md、Agent Skills 的具体页面建立页面数据、中文标题、段落、代码块、提示卡和前后页链接。

### 任务 3：实现路径与交互

**文件：** `outputs/stitch-docs-cn/scripts/app.js`

根据 URL 路径渲染页面；支持侧栏切换、移动端抽屉、搜索过滤、复制代码、深浅色主题和目录锚点。

### 任务 4：本地验证

启动静态服务器，逐一检查入口页、栏目页、移动端布局、控制台错误和所有页面链接。

