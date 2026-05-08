---
title: 生态边界
description: Agent Evidence 与相邻系统的边界。
---

# 生态边界

Agent Evidence 连接相邻系统，但不吞并它们的所有权。

| System | 拥有 | Evidence 关系 |
| --- | --- | --- |
| Agent Runtime | Execution facts、tasks、tool calls、permissions、snapshots。 | Evidence 引用 runtime ids，并导出 trust graphs。 |
| Agent UI | Evidence display、citations、review panels、本地交互。 | UI 消费 evidence read models 并提交 review actions。 |
| Agent Knowledge | Source-grounded knowledge packs 与 source metadata。 | Evidence 记录 selected、omitted、contradicted source refs。 |
| Agent Artifact | Content bytes、versions、diffs、previews、export bytes。 | Evidence 链接 artifact refs、versions、claims 与 review facts。 |
| Telemetry systems | Traces、spans、logs、metrics。 | Evidence 引用 trace/span ids 并总结 completeness。 |
| Policy systems | Approval、risk、retention、access rules。 | Evidence 记录 decisions 与 redaction/retention facts。 |
| A2A peers | Remote tasks、messages、artifacts。 | Evidence 保留 peer ids 与 remote artifact/source refs。 |
| MCP servers | Tools、resources、prompts。 | Evidence 链接 tool/resource refs 与 invocation facts。 |
| Compliance systems | Business rules 与 legal interpretation。 | Evidence 导出 facts；compliance systems 做 domain verdicts。 |
