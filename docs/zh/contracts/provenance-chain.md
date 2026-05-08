---
title: Provenance chain
description: Agent outcomes 的生产图。
---

# Provenance chain

Provenance chain 解释 outcome 如何产生。它借鉴 W3C PROV 的 entity/activity/agent 模式，但让 Agent Evidence 聚焦 portable refs 与 agent execution。

## Node types

| Node | 示例 |
| --- | --- |
| `entity` | prompt、input part、retrieved source、tool result、artifact、answer、claim、dataset row、policy、exported file。 |
| `activity` | model request、retrieval、tool call、human approval、verification check、review、export、redaction、peer handoff。 |
| `agent` | user、assistant、runtime、tool server、reviewer、policy system、model provider、peer agent、organization。 |

## Edge rules

- Output entity SHOULD 通过 `generated_by` 连接到 activity。
- Activity SHOULD 用 `used` 列出 inputs。
- Transformed entity SHOULD 通过 `derived_from` 连接到 source。
- Human 或 automated responsibility SHOULD 使用 `attributed_to` 或 `associated_with`。
- Provenance edges SHOULD 在 edge 本身携带 timestamps、confidence 与 source ids。
- Peer 或 remote systems SHOULD 保留 native ids，而不是重写为 local-only ids。

## Runtime and telemetry linkage

Provenance nodes MAY 引用 `runtime_id`、`session_id`、`thread_id`、`turn_id`、`task_id`、`run_id`、`tool_call_id`、`artifact_id`、`trace_id` 与 `span_id`。这些 ids 是 correlation refs，不替代 provenance semantics。
