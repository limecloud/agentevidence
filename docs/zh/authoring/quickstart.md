---
title: 快速开始
description: 如何实现 Agent Evidence v0.1.0。
---

# 快速开始

1. 选择 scope：answer、artifact、task、run、session、review、incident 或 support case。
2. 创建 `evidence_pack_id` 并写入 pack metadata。
3. 从 answer 或 artifact 提取 claims，并分配稳定的 `claim_id`。
4. 将每个 claim 关联 source refs，或标记为 `unsupported`、`unverified`、`contradicted`、`not_applicable`。
5. 附加来自 runtime、tools、retrieval、model requests、artifacts、peer systems 与 human decisions 的 provenance refs。
6. 将 verification results 与 review verdicts 作为不同 facts 附加。
7. 如实记录 redactions、omissions、expired refs 与 missing facts。
8. 导出包含 files、hashes、schemas、access 与 completeness status 的 manifest。

## Minimal example

```json
{
  "evidence_pack_id": "evp_123",
  "schema_version": "0.1.0",
  "scope": { "task_id": "task_123", "artifact_id": "artifact_456" },
  "status": "ready",
  "created_at": "2026-05-08T00:00:00Z",
  "updated_at": "2026-05-08T00:00:00Z",
  "producer": { "id": "runtime_1", "type": "runtime" },
  "claims": [
    { "claim_id": "claim_1", "text": "The policy requires review.", "status": "supported" }
  ],
  "sources": [
    { "source_id": "src_1", "source_kind": "document", "uri": "knowledge://policy/review" }
  ],
  "support_edges": [
    { "edge_id": "edge_1", "claim_id": "claim_1", "source_id": "src_1", "relationship": "supports" }
  ],
  "completeness": {
    "claims": { "status": "complete" },
    "sources": { "status": "complete" },
    "telemetry": { "status": "not_collected" }
  }
}
```

## Implementation checklist

- 先生成 ids，再 redaction，确保 refs stable。
- Large payloads 留在 owner systems，在 pack 中引用。
- Verification 与 review records 尽量 append-only。
- 保留 selected 与 omitted source records。
- 为 validators 与 export consumers 暴露 JSON Schemas。
- 至少增加一个 redacted export acceptance test 与一个 contradiction acceptance test。
