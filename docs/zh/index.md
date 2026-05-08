---
layout: home
title: Agent Evidence
description: 面向 Agent 工作的可移植信任记录标准。

hero:
  name: Agent Evidence
  text: 面向 Agent 工作的可移植信任记录。
  tagline: "让回答、产物、工具决策、评审、脱敏与回放可审计，同时不变成 runtime、UI、trace backend 或 storage system。"
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: 实现快速开始
      link: /zh/authoring/quickstart
    - theme: alt
      text: 标准生态
      link: /zh/reference/agent-ecosystem
    - theme: alt
      text: LLM 完整上下文
      link: ../llms-full.txt

features:
  - title: Claim-level grounding
    details: "把每个关键断言连接到 supporting、contradicting、qualifying 或 background evidence。"
  - title: 可移植 provenance
    details: "把 source、tool、model、artifact、human、peer-agent、runtime、trace 与 span refs 保留为生产图谱。"
  - title: Verification 不等于 review
    details: "自动检查、人类 verdict、waiver、rubric、sign-off fact 与 open issue 分离但可链接。"
  - title: Replay honesty
    details: "明确哪些内容可重建、哪些只是近似、哪些事实 missing、expired、redacted 或 unavailable。"
  - title: Redaction-aware export
    details: "用稳定 id、schema、hash、access metadata 与显式 redaction records 分享 evidence pack。"
  - title: AI-friendly docs
    details: "提供 llms.txt、llms-full.txt、JSON Schemas、examples 与 versioned snapshots，方便 Agent 消费。"
---

## Agent Evidence 定义什么

| 契约 | 回答的问题 |
| --- | --- |
| Evidence pack | 当前审计的 scoped outcome 是什么，证据完整度如何？ |
| Claim map | 产生了哪些 claims，每个 claim 如何被支持、反驳、限定或留空？ |
| Source map | 哪些 sources 被选择、遗漏、过期、矛盾、脱敏或不可用？ |
| Provenance chain | 哪些 tools、models、artifacts、humans、peers、runtime events、traces 与 spans 产生了结果？ |
| Verification 与 review | 哪些 checks 运行了，谁或什么给出了 verdict？ |
| Replay 与 export | 哪些内容可重建，哪些内容可以安全分享？ |

## 快速入口

- [什么是 Agent Evidence？](./what-is-agent-evidence.md)
- [最新规范](./specification.md)
- [证据模型](./concepts/evidence-model.md)
- [Evidence pack](./contracts/evidence-pack.md)
- [Claim map](./contracts/claim-map.md)
- [Agent 标准生态](./reference/agent-ecosystem.md)

## 面向 AI 客户端

- [llms.txt](../llms.txt)：简洁导航索引。
- [llms-full.txt](../llms-full.txt)：当前英文核心文档合集。
- [llm.txt](../llm.txt) 与 [llm-full.txt](../llm-full.txt)：兼容别名。

## Agent 标准生态

Evidence 负责 trust、review、replay、redaction 与 export records。Runtime 负责执行，UI 负责投影，Knowledge 负责 source-grounded context，Artifact 系统负责 durable deliverables。
