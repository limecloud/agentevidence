---
title: Evidence pack
description: 可移植证据容器。
---

# Evidence pack

`evidence_pack` 是与某个 scoped agent outcome 相关的全部 evidence facts 的可移植容器。它可以表示 answer、artifact、task、run、session、review、incident、support case 或 external handoff。

## Required fields

| Field | 目的 |
| --- | --- |
| `evidence_pack_id` | Stable pack id。 |
| `schema_version` | Agent Evidence schema version。 |
| `scope` | Session、task、run、artifact、answer、review、incident 或 external case scope。 |
| `status` | Pack lifecycle status。 |
| `created_at` / `updated_at` | Producer timestamps。 |
| `producer` | 组装 pack 的 runtime、service、worker、host 或 exporter。 |
| `claims` / `claim_map_ref` | Inline compact claims 或 referenced claim map。 |
| `sources` / `source_map_ref` | Inline compact sources 或 referenced source map。 |
| `support_edges` | Claims、sources、checks、artifacts 与 provenance 之间的关系。 |
| `provenance` / `provenance_ref` | Production graph 或 compact provenance refs。 |
| `verification_results` | Check results。 |
| `reviews` | Human、automated 或 policy verdicts。 |
| `replay_cases` | Replay 与 reconstruction boundaries。 |
| `redactions` / `redaction_summary` | Redaction 与 access facts。 |
| `completeness` | Category-level completeness。 |

Pack SHOULD 对大型 payload 使用 refs。离线 audit 需要的小型 facts MAY inline。

## Completeness entry

每个 completeness category SHOULD 声明：

| Field | 目的 |
| --- | --- |
| `status` | `complete`、`partial`、`missing`、`unknown`、`not_applicable` 或 `not_collected`。 |
| `missing_facts` | 结构化 missing fact records。 |
| `notes` | 可选人类可读说明。 |
| `last_checked_at` | 对 freshness-sensitive categories 的检查时间。 |

## Pack invariants

- Pack MUST 在 redaction 与 export 后保持 ids stable。
- Pack MUST NOT 把 missing evidence 标成 passed。
- Pack SHOULD 在 snippets 或 payloads 被移除时仍保留 relationship graph。
- Pack SHOULD 披露自己是 full pack、compact projection、redacted export 还是 pointer-only handoff。
- Pack SHOULD 在导出到源系统之外时包含 schema refs 与 hashes。
