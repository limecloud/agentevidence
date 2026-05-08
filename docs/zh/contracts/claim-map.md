---
title: Claim map
description: Claim grounding 与 support relationships。
---

# Claim map

Claim map 记录 Agent 断言了什么，以及每个 assertion 如何被 supported、contradicted、qualified、reviewed，或为何仍 unverified。

## Claim record

| Field | 目的 |
| --- | --- |
| `claim_id` | Stable claim id。 |
| `claim_type` | `fact`、`recommendation`、`decision`、`summary`、`generated_field`、`artifact_section`、`policy`、`risk` 或 custom。 |
| `text` / `range_ref` | Claim text，或 answer/artifact 内的位置引用。 |
| `status` | `supported`、`partially_supported`、`unsupported`、`contradicted`、`unverified`、`not_applicable`。 |
| `confidence` | 可选 calibrated confidence、rubric score 或 confidence band。 |
| `support_edges` | 指向 source refs、verification results、artifact refs、telemetry refs 或 provenance facts 的链接。 |
| `risk` | User、safety、legal、financial、medical、operational、security、privacy 或 business risk class。 |
| `owner_ref` | 可选 user、agent、policy、artifact 或 external owner。 |

Claims SHOULD 足够细，能被 review。把整段 answer 当作一个 claim 通常太粗。

## Support edge

| Relationship | 含义 |
| --- | --- |
| `supports` | Evidence 直接支撑 claim。 |
| `partially_supports` | Evidence 支撑 claim 的一部分，或需要限定条件。 |
| `contradicts` | Evidence 与 claim 冲突。 |
| `qualifies` | Evidence 限定 scope、applicability 或 conditions。 |
| `background` | Evidence 是 context，但不是直接 support。 |
| `generated_from` | Claim 由 tool result、model output、artifact 或 human instruction 派生。 |
| `verified_by` | Claim 被某个 verification result 检查。 |
| `reviewed_by` | Claim 被某个 review verdict 覆盖。 |

## Claim status rules

- `supported` 需要至少一个 supporting edge，且没有同等或更高 authority 的 unresolved contradiction。
- Evidence 只支撑 claim 子集时应优先使用 `partially_supported`。
- `contradicted` 必须保留 counter-evidence edge。
- 系统没有检查或无法检查 support 时，应诚实使用 `unverified`。
- Opinion、formatting 或 non-evidentiary content 应使用 `not_applicable`。
