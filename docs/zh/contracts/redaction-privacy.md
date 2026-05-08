---
title: Redaction and privacy
description: Privacy、redaction、retention 与 access controls。
---

# Redaction and privacy

Evidence 经常包含 sensitive prompts、tool results、user data、credentials、private documents、licensed data 或 regulated records。Redaction 必须 explicit 且 auditable。

## Redaction record

| Field | 目的 |
| --- | --- |
| `redaction_id` | Stable redaction id。 |
| `target_ref` | 受影响的 claim、source、snippet、trace、artifact、review note 或 field。 |
| `redaction_kind` | `remove`、`mask`、`hash`、`tokenize`、`summarize`、`withhold`、`expire`。 |
| `reason` | `privacy`、`secret`、`policy`、`license`、`safety`、`retention`、`legal`、`user_request`。 |
| `applied_by` | System、policy、human、exporter 或 owner。 |
| `replacement_ref` | 可选 safe replacement、digest、token 或 summary。 |
| `applied_at` | Timestamp。 |

Redacted pack SHOULD 仍保持结构可用。它应暴露某个 fact 曾经存在、移除了什么 category，以及 verification 是否仍可进行。

## Access and retention

Evidence exports SHOULD 包含 intended audience、retention class、expiry、allowed use，以及 downstream systems 能否 re-identify tokenized values。Expired refs SHOULD 变成 `expired`，而不是静默消失。
