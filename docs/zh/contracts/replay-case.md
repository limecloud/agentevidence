---
title: Replay case
description: Replay 与 reconstruction contract。
---

# Replay case

Replay case 描述重建或近似复现 agent run 所需内容。

## Replay record

| Field | 目的 |
| --- | --- |
| `replay_id` | Stable replay id。 |
| `scope` | Session、task、run、turn、artifact、review 或 export scope。 |
| `input_refs` | User input、attachments、context、model config、tool args 与 policy refs。 |
| `snapshot_refs` | Runtime、context、tool inventory、policy、source 与 artifact snapshots。 |
| `trace_refs` | Trace ids、span ids、logs、metrics 或 external telemetry refs。 |
| `determinism` | `deterministic`、`approximate`、`non_deterministic` 或 `unavailable`。 |
| `missing_facts` | 需要但 unavailable、expired、redacted、not collected 或 not applicable 的 facts。 |
| `expected_outputs` | 用于比较的 claims、artifacts、checks、diffs、hashes 或 summaries。 |
| `replay_steps` | 可选 ordered instructions 或 machine-readable steps。 |

Replay cases SHOULD 如实说明 non-deterministic model output 与 unavailable external services。它们是 reconstruction evidence，不保证未来 output byte-for-byte 一致。

## Replay outcomes

Replay attempt SHOULD 记录是否匹配 expected claims、artifact hashes、verification results 或 review conditions。Mismatch 是 evidence，不自动表示原始 pack 失败。
