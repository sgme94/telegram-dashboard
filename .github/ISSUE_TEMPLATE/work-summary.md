---
name: 📝 工作总结
description: 记录每日工作总结和学习内容
title: "[工作总结] YYYY-MM-DD"
labels: ["工作总结"]
body:
  - type: markdown
    attributes:
      value: |
        ## 工作总结模板
        请填写今日完成的工作和学习内容
  - type: textarea
    id: tasks
    attributes:
      label: ✅ 完成的任务
      description: 列出今日完成的主要任务
      placeholder: |
        - 任务 1
        - 任务 2
        - 任务 3
    validations:
      required: true
  - type: textarea
    id: learnings
    attributes:
      label: 📚 学习记录
      description: 记录今日学习到的新知识或技能
      placeholder: |
        - 学习了...
        - 掌握了...
    validations:
      required: false
  - type: textarea
    id: issues
    attributes:
      label: ⚠️ 遇到的问题
      description: 记录遇到的问题及解决方案
      placeholder: |
        - 问题：...
        - 解决：...
    validations:
      required: false
