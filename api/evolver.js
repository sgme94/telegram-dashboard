// Vercel Serverless Function - Evolver 进化记录 API
export default function handler(req, res) {
  const evolutions = [
    {
      date: '2026-03-04',
      title: '工作流程优化',
      content: `### 🧬 改进内容
- 简化 Telegram 群组总结流程
- 移除小麦同步依赖
- 优化错误处理机制

### 📊 效果
- 执行时间减少 40%
- 代码可维护性提升`
    },
    {
      date: '2026-03-03',
      title: 'Canvas 页面优化',
      content: `### 🧬 改进内容
- 添加 Telegram Web App 主题适配
- 优化移动端显示效果
- 添加下拉刷新功能

### 📊 效果
- 用户体验显著提升
- 支持深色模式自动切换`
    }
  ];

  res.status(200).json(evolutions);
}
