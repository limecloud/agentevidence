---
title: Export manifest
description: Portable evidence export manifest.
---

# Export manifest

An export manifest records how an evidence pack was packaged for another system.

## Manifest fields

| Field | Purpose |
| --- | --- |
| `export_id` | Stable export id. |
| `evidence_pack_id` | Source pack. |
| `schema_version` | Manifest schema version. |
| `created_at` | Export time. |
| `files` | Paths, media types, sizes, hashes, roles, and optional signatures. |
| `schemas` | Schema ids, versions, and refs used to validate files. |
| `completeness` | Category-level completeness at export time. |
| `redactions` | Redaction summary and records. |
| `access` | Intended audience, expiry, license, policy, or classification. |
| `signatures` | Optional signatures, attestations, checksums, or trust statements. |

Exports SHOULD be stable enough for audit and support handoff, but must not imply legal approval unless a review verdict says so.

## File roles

Common roles include `pack`, `claim_map`, `source_map`, `provenance`, `verification`, `review`, `replay`, `redaction`, `artifact_ref`, `schema`, `signature`, and `readme`.
