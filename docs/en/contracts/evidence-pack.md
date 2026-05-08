---
title: Evidence pack
description: Portable evidence container.
---

# Evidence pack

An `evidence_pack` is the portable container for all evidence facts related to one scoped agent outcome. It can represent an answer, artifact, task, run, session, review, incident, support case, or external handoff.

## Required fields

| Field | Purpose |
| --- | --- |
| `evidence_pack_id` | Stable pack id. |
| `schema_version` | Agent Evidence schema version. |
| `scope` | Session, task, run, artifact, answer, review, incident, or external case scope. |
| `status` | Pack lifecycle status. |
| `created_at` / `updated_at` | Producer timestamps. |
| `producer` | Runtime, service, worker, host, or exporter that assembled the pack. |
| `claims` / `claim_map_ref` | Inline compact claims or a referenced claim map. |
| `sources` / `source_map_ref` | Inline compact sources or a referenced source map. |
| `support_edges` | Relationships among claims, sources, checks, artifacts, and provenance. |
| `provenance` / `provenance_ref` | Production graph or compact provenance refs. |
| `verification_results` | Check results. |
| `reviews` | Human, automated, or policy verdicts. |
| `replay_cases` | Replay and reconstruction boundaries. |
| `redactions` / `redaction_summary` | Redaction and access facts. |
| `completeness` | Category-level completeness. |

A pack SHOULD prefer refs for large payloads. It MAY embed compact facts needed for offline audit.

## Completeness entry

Each completeness category SHOULD state:

| Field | Purpose |
| --- | --- |
| `status` | `complete`, `partial`, `missing`, `unknown`, `not_applicable`, or `not_collected`. |
| `missing_facts` | Structured missing fact records. |
| `notes` | Optional human-readable explanation. |
| `last_checked_at` | Timestamp for freshness-sensitive categories. |

## Pack invariants

- A pack MUST keep ids stable across redaction and export.
- A pack MUST NOT mark missing evidence as passed.
- A pack SHOULD preserve the relationship graph even when snippets or payloads are removed.
- A pack SHOULD disclose whether it is a full pack, compact projection, redacted export, or pointer-only handoff.
- A pack SHOULD include schema refs and hashes when exported outside the source system.
