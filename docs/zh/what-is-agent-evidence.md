---
title: 什么是 Agent Evidence?
description: Agent Evidence 概念入口。
---

# 什么是 Agent Evidence？

Agent Evidence 定义 Agent 工作周围的信任层。它不是 trace backend，不是 citation renderer，不是 document store，也不是 compliance verdict。它是把 Agent outcome 连接到 inspect、replay、verify、review、redact 与 export 所需事实的可移植记录。

当产品需要下列稳定语义时，应使用 Agent Evidence：

- claim-to-source grounding 与 counter-evidence。
- tool、retrieval、model、artifact、peer-agent 与 human-decision provenance。
- 相关但不能合并的 verification checks 与 review verdicts。
- replay instructions 与 reconstruction boundaries。
- redaction、retention、privacy、access 与 export-safety state。
- 面向 audit、support、incident、compliance 与 customer-handoff 的 exports。
- 用 runtime ids、trace ids、span ids、event ids、source ids 与 artifact ids 进行跨系统关联。

不要用它定义 model APIs、UI components、tool protocols、artifact storage、observability storage、legal policy 或 knowledge-pack authoring。这些仍由相邻系统负责。

## 分层地图

| Layer | 问题 | Evidence facts |
| --- | --- | --- |
| `claim` | Agent 断言了什么？ | claim id、text/range、status、confidence、support links。 |
| `source` | 什么支撑、限定或反驳它？ | source refs、snippets、selectors、retrieval metadata、omissions。 |
| `provenance` | 它如何产生？ | runtime ids、trace/span refs、tools、models、humans、artifacts、peer refs。 |
| `verification` | 做过哪些检查？ | check results、coverage、failures、warnings。 |
| `review` | 谁裁决了它？ | reviewer、verdict、rubric、notes、sign-off。 |
| `replay` | 能否重建？ | inputs、snapshots、cursors、determinism、missing facts。 |
| `privacy` | 哪些内容可以安全共享？ | redactions、retention、access、export policy。 |

## 设计原则

Evidence 应是 refs 与小型结构化事实组成的 graph。大型 payload、raw traces、documents、artifacts 与 private tool outputs 应留在各自 owner system，通过 stable ids、URLs、hashes 或 exporter manifests 引用。

## 最小兼容结果

最小兼容实现可以先从一个 evidence pack 开始：记录 claims、sources、support edges、provenance refs、verification status、completeness 与 export metadata。后续可以逐步增加更丰富的 review、replay、redaction 与 telemetry correlation，而不破坏核心身份模型。
