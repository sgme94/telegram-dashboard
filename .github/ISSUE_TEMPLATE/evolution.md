---
name: 🧬 进化记录
description: 记录系统改进和错误修复
title: "[进化] 改进内容标题"
labels: ["进化", "改进"]
body:
  - type: markdown
    attributes:
      value: |
        ## 进化记录模板
        记录系统、流程或工作方式的改进
  - type: textarea
    id: improvements
    attributes:
      label: 🧬 改进内容
      description: 详细描述改进的具体内容
      placeholder: |
        - 优化了...
        - 简化了...
        - 修复了...
    validations:
      required: true
  - type: textarea
    id: results
    attributes:
      label: 📊 效果
      description: 改进后带来的效果或收益
      placeholder: |
        - 性能提升 XX%
        - 时间减少 XX%
        - 用户体验提升...
    validations:
      required: false
  - type: textarea
    id: before-after
    attributes:
      label: 📈 对比
      description: 改进前后的对比（可选）
      placeholder: |
        改进前：...
        改进后：...
    validations:
      required: false
