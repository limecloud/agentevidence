---
title: Source map
description: Source references、selectors、retrieval、omissions 与 contradictions。
---

# Source map

Source map 记录可用于 support、qualify、challenge 或 contextualize claims 的材料。

## Source ref

| Field | 目的 |
| --- | --- |
| `source_id` | Stable source id。 |
| `source_kind` | `document`、`web_page`、`knowledge_item`、`tool_result`、`human_input`、`artifact`、`trace`、`dataset`、`policy`、`peer_record` 或 `external_record`。 |
| `uri` / `ref` | Location 或 owner-specific reference。 |
| `selector` | Text quote、text position、JSON pointer、line range、fragment、timestamp、bounding box 或 custom selector。 |
| `snippet_ref` / `snippet` | 可选 excerpt 或安全 redacted excerpt。 |
| `retrieval` | Query、rank、score、index、timestamp、selected/omitted status 与 reranker metadata。 |
| `freshness` | Observed time、version、stale warning、expiry 或 last checked time。 |
| `trust` | Authority、reviewer、signature、source tier 或 trust rationale。 |
| `privacy` | Classification、redaction state、access、license 与 retention facts。 |

Source maps SHOULD 记录 selected sources 和重要 omitted sources。Omissions 解释 source 为什么被 rejected、unavailable、stale、duplicate、unsafe、contradicted 或 out of scope。

## Selector guidance

Selectors SHOULD 跨展示格式保持稳定。优先使用 owner ids、version ids、hashes、JSON pointers、line ranges、text positions、timestamps 或 Web Annotation-style selectors，少依赖脆弱的 rendered coordinates。

## Omission record

Omission SHOULD 包含 `source_id`、`reason`、`observed_at` 与可选 `decision_ref`。常见 reasons 包括 `duplicate`、`low_relevance`、`stale`、`unsafe`、`private`、`license_restricted`、`contradicted`、`unavailable` 与 `out_of_scope`。
