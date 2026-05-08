---
title: Export manifest
description: 可移植 evidence export manifest。
---

# Export manifest

Export manifest 记录 evidence pack 如何被打包给另一个系统。

## Manifest fields

| Field | 目的 |
| --- | --- |
| `export_id` | Stable export id。 |
| `evidence_pack_id` | Source pack。 |
| `schema_version` | Manifest schema version。 |
| `created_at` | Export time。 |
| `files` | Paths、media types、sizes、hashes、roles 与可选 signatures。 |
| `schemas` | 用于验证 files 的 schema ids、versions 与 refs。 |
| `completeness` | Export time 的 category-level completeness。 |
| `redactions` | Redaction summary 与 records。 |
| `access` | Intended audience、expiry、license、policy 或 classification。 |
| `signatures` | Optional signatures、attestations、checksums 或 trust statements。 |

Exports SHOULD 足够稳定，可用于 audit 与 support handoff；但除非 review verdict 明确说明，否则不能暗示 legal approval。

## File roles

Common roles 包括 `pack`、`claim_map`、`source_map`、`provenance`、`verification`、`review`、`replay`、`redaction`、`artifact_ref`、`schema`、`signature` 与 `readme`。
