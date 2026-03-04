# Telegram 任务看板 - Vercel 部署指南

> 🚀 基于 GitHub Issues 的自动更新任务看板

## 📁 项目结构

```
vercel-deploy/
├── public/
│   └── index.html        # 聚合页面（三合一）
├── .github/
│   └── ISSUE_TEMPLATE/   # Issue 模板
│       ├── work-summary.md
│       ├── evolution.md
│       └── task.md
└── README.md
```

## 🚀 部署步骤

### 1. 推送到 GitHub（已完成）
```bash
cd vercel-deploy
git push origin main
```

### 2. Vercel 部署（已完成）
- **主 URL**: `https://telegram-dashboard-lake.vercel.app/`
- **GitHub**: https://github.com/sgme94/telegram-dashboard

### 3. 配置 BotFather
1. Telegram 搜索 `@BotFather`
2. 发送 `/mybots` 选择 `@Omybot666_bot`
3. 选择 **"Menu Button"**
4. 输入 URL: `https://telegram-dashboard-lake.vercel.app/`
5. 设置按钮名称：`工作看板`

## 📊 页面功能

### 三个标签页
| 标签 | 数据来源 | 说明 |
|------|---------|------|
| 📝 工作记录 | label:工作总结 | 每日工作总结 |
| 📊 项目进度 | 所有 Issues | 按 label 分组显示 |
| 🧬 进化记录 | label:进化/改进 | 系统改进时间线 |

### 自动更新
- ✅ 页面加载时自动获取最新数据
- ✅ 每 5 分钟自动刷新
- ✅ 手动刷新按钮

## 📝 如何添加内容

### 方法 1：GitHub Web 界面
1. 访问 https://github.com/sgme94/telegram-dashboard/issues
2. 点击 **New issue**
3. 选择模板（工作总结/进化记录/任务）
4. 填写内容并提交

### 方法 2：GitHub CLI
```bash
# 工作总结
gh issue create --title "[工作总结] 2026-03-04" \
  --body "### ✅ 完成的任务
- 任务 1
- 任务 2" \
  --label "工作总结"

# 进化记录
gh issue create --title "[进化] 改进内容" \
  --body "### 🧬 改进内容
- 优化了..." \
  --label "进化"
```

## 🏷️ Labels 说明

| Label | 颜色 | 用途 |
|-------|------|------|
| 工作总结 | 🟣 #667eea | 每日工作总结 |
| 进化 | 🟢 #38ef7d | 系统进化记录 |
| 改进 | 🟢 #38ef7d | 流程改进 |
| 任务 | 🔴 #f5576c | 普通任务 |

## 🔧 高级配置

### 修改自动刷新间隔
编辑 `public/index.html`，找到：
```javascript
setInterval(() => { loadIssues(); }, 5 * 60 * 1000);
```
修改 `5 * 60 * 1000`（毫秒）为你需要的间隔。

### 修改 GitHub 仓库
编辑 `public/index.html`，找到：
```javascript
const GITHUB_OWNER = 'sgme94';
const GITHUB_REPO = 'telegram-dashboard';
```

## 📈 数据统计

页面自动统计：
- 总任务数
- 已完成任务数
- 完成率
- 项目/标签分组

## ⚠️ 注意事项

1. **浏览器缓存**: 首次加载后可能需要强制刷新（Ctrl+F5）
2. **GitHub API 限制**: 未认证用户每小时 60 次请求
3. **Issue 状态**: 关闭的 Issue 会显示为 ✅ 已完成

## 🎯 更新日志

### V2.0 (2026-03-04)
- ✅ 集成 GitHub Issues API
- ✅ 添加 Issue 模板
- ✅ 自动刷新（5 分钟）
- ✅ 三合一聚合页面
- ✅ 实时数据统计

### V1.0 (2026-03-04)
- ✅ 静态页面部署
- ✅ 三个独立页面

---

**当前版本**: V2.0  
**最后更新**: 2026-03-04
