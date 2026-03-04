// Vercel Serverless Function - 工作总结 API
// 从 GitHub Issues 或 JSON 文件读取数据

export default function handler(req, res) {
  // 示例数据（后续可以连接真实数据源）
  const summaries = [
    {
      date: '2026-03-04',
      content: `### ✅ 完成的任务
- 重新设计 Telegram 群组工作总结流程
- 创建 daily-summary-group.js 脚本（V3 简化版）
- 更新 HEARTBEAT.md 配置

### 📚 学习记录
- 学习了 OpenClaw message 工具的 Telegram 发送机制
- 掌握了 Windows Task Scheduler 配置方法`
    },
    {
      date: '2026-03-03',
      content: `### ✅ 完成的任务
- Telegram 任务看板 Canvas 页面开发
- 工作记录/进化记录/项目进度页面完成

### 📚 学习记录
- Canvas API 集成
- Telegram Web App 主题适配`
    }
  ];

  res.status(200).json(summaries);
}
