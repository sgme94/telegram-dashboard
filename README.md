# Telegram 任务看板 - Vercel 部署指南

## 📁 项目结构

```
vercel-deploy/
├── public/              # 静态页面
│   ├── work.html       # 工作记录
│   ├── progress.html   # 项目进度
│   └── evolution.html  # 进化记录
├── api/                 # Serverless API
│   ├── summaries.js    # 工作总结 API
│   └── evolver.js      # 进化记录 API
└── vercel.json          # Vercel 配置
```

## 🚀 部署步骤

### 1. 推送到 GitHub

```bash
cd vercel-deploy
git init
git add .
git commit -m "Initial commit - Telegram Dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/telegram-dashboard.git
git push -u origin main
```

### 2. 连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **"Add New Project"**
3. 选择 **"Import Git Repository"**
4. 选择 `telegram-dashboard` 仓库
5. 点击 **"Deploy"**

### 3. 获取公网 URL

部署完成后，Vercel 会提供：
- **生产环境**: `https://telegram-dashboard-YOUR-USERNAME.vercel.app`
- **预览环境**: 每次 push 都会生成预览 URL

### 4. 配置 BotFather

1. 在 Telegram 搜索 `@BotFather`
2. 发送 `/mybots` 选择你的 bot
3. 选择 **"Menu Button"**
4. 输入公网 URL（如：`https://telegram-dashboard.vercel.app/work.html`）
5. 设置按钮名称（如："工作看板"）

## 📊 页面说明

| 页面 | URL | 功能 |
|------|-----|------|
| 工作记录 | `/work.html` | 查看每日工作总结 |
| 项目进度 | `/progress.html` | 任务追踪与统计 |
| 进化记录 | `/evolution.html` | 系统改进时间线 |

## 🔧 自定义数据

修改 `api/summaries.js` 和 `api/evolver.js` 连接真实数据源：

- GitHub Issues
- 数据库
- 第三方 API

## 📝 注意事项

1. **CORS**: Vercel 自动处理 CORS，无需额外配置
2. **环境变量**: 在 Vercel Dashboard 设置
3. **自动部署**: 每次 push 到 main 分支自动部署
4. **免费额度**: 100GB 带宽/月，足够个人使用

## 🎯 后续优化

- [ ] 连接真实数据源（GitHub API / 数据库）
- [ ] 添加认证机制
- [ ] 增加缓存策略
- [ ] 添加更多统计图表

---

**部署时间**: 2026-03-04  
**版本**: V1.0
