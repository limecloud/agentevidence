---
title: Interoperability
description: 与相邻协议的边界。
---

# Interoperability

Agent Evidence 是桥接层，不替代现有标准。

| Standard or system | 关系 |
| --- | --- |
| Agent Runtime | Runtime 产生 execution facts；evidence 打包 trust、review、replay 与 audit facts。 |
| Agent UI | UI 展示 evidence；evidence 拥有 portable review/read models。 |
| Agent Knowledge | Knowledge 提供 source-grounded material；evidence 记录 selected、omitted、stale 与 contradicted source refs。 |
| Agent Artifact | Artifact systems 拥有 bytes、versions、previews 与 diffs；evidence 连接 artifact refs 与 reviews。 |
| A2A | Peer tasks、messages 与 artifacts 可以被 cited；evidence 保留 native peer ids 与 remote refs。 |
| MCP | Tool calls 与 resources 可成为 source/provenance refs；evidence 不定义 tool schemas。 |
| OpenTelemetry | Traces、spans、logs、metrics 与 GenAI operation names 被引用用于 correlation。 |
| CloudEvents | Event envelopes 可承载 evidence events。 |
| W3C PROV | Entity/activity/agent pattern 启发 provenance chains。 |
| W3C Web Annotation | Selectors 与 targets 启发 claim/source anchoring。 |
| in-toto / SLSA | Attestation 与 provenance patterns 启发 signed export 与 build-style evidence。 |
| OpenLineage | Run/job/dataset facets 启发 data lineage interoperability。 |
| CycloneDX | Attestations、claims、evidence、counter-evidence、declarations 与 confidence 启发 audit packaging。 |

Interoperability 意味着保留 native ids 与 semantics，同时增加 evidence-specific relationships。Agent Evidence 不应把所有上游概念压平成 generic text。

## Agent Runtime profile alignment

对 Agent Runtime 兼容来源，Agent Evidence 应直接消费 runtime facts：

```text
RuntimeEvent / ThreadReadModel / TaskSnapshot
  -> EvidencePack / ReplayCase / ReviewRecord / ExportManifest
```

Evidence packs SHOULD 在可用时保留 `runtime_id`、`session_id`、`thread_id`、`turn_id`、`task_id`、`run_id`、`attempt_id`、`tool_call_id`、`action_id`、`trace_id` 以及下游 evidence/replay/review/export ids。

Evidence MUST NOT 发明 execution status、把缺失 telemetry 伪造成 evidence，或让 replay/review 为同一 turn 重建第二套 timeline。
