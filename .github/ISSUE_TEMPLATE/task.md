---
name: 📋 任务
description: 创建新任务
title: "[任务] 任务标题"
labels: ["任务"]
body:
  - type: markdown
    attributes:
      value: |
        ## 任务模板
        创建新任务，跟踪进度
  - type: textarea
    id: description
    attributes:
      label: 📝 任务描述
      description: 详细描述任务内容
      placeholder: |
        任务的目标是...
        需要完成的工作...
    validations:
      required: true
  - type: textarea
    id: checklist
    attributes:
      label: ✅ 任务清单
      description: 列出需要完成的具体步骤（使用 - [ ] 格式）
      placeholder: |
        - [ ] 步骤 1
        - [ ] 步骤 2
        - [ ] 步骤 3
    validations:
      required: false
  - type: dropdown
    id: priority
    attributes:
      label: 🔥 优先级
      options:
        - 低
        - 中
        - 高
        - 紧急
    validations:
      required: true
