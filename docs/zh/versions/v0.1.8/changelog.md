---
title: v0.1.8 变更记录
description: Agent Evidence v0.1.8 变更记录。
---

# v0.1.8 变更记录

## Added

- 新增英文与简体中文 Agent Runtime profile 测试用例，覆盖 runtime spine ids、tool failures、permission denial、routing decisions、evidence packs、replay、review、known gaps、redaction 与 export manifests。

## Changed

- 将互操作指南对齐 Agent Runtime `RuntimeEvent`、`ThreadReadModel` 与 `TaskSnapshot` 来源。
- 扩展 event 与 evidence pack schemas，加入可选 runtime profile correlation 字段，如 `attempt_id`、`step_id`、`tool_call_id`、`action_id`、`context_id` 与 `policy_decision_id`。
