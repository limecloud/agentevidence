---
title: Source map
description: Source references, selectors, retrieval, omissions, and contradictions.
---

# Source map

A source map records the materials available to support, qualify, challenge, or contextualize claims.

## Source ref

| Field | Purpose |
| --- | --- |
| `source_id` | Stable source id. |
| `source_kind` | `document`, `web_page`, `knowledge_item`, `tool_result`, `human_input`, `artifact`, `trace`, `dataset`, `policy`, `peer_record`, or `external_record`. |
| `uri` / `ref` | Location or owner-specific reference. |
| `selector` | Text quote, text position, JSON pointer, line range, fragment, timestamp, bounding box, or custom selector. |
| `snippet_ref` / `snippet` | Optional excerpt or safe redacted excerpt. |
| `retrieval` | Query, rank, score, index, timestamp, selected/omitted status, and reranker metadata. |
| `freshness` | Observed time, version, stale warning, expiry, or last checked time. |
| `trust` | Authority, reviewer, signature, source tier, or trust rationale. |
| `privacy` | Classification, redaction state, access, license, and retention facts. |

Source maps SHOULD record selected and important omitted sources. Omissions explain why a source was rejected, unavailable, stale, duplicate, unsafe, contradicted, or out of scope.

## Selector guidance

Selectors SHOULD be stable across display formats. Prefer owner ids, version ids, hashes, JSON pointers, line ranges, text positions, timestamps, or Web Annotation-style selectors over fragile rendered coordinates.

## Omission record

An omission SHOULD include `source_id`, `reason`, `observed_at`, and optional `decision_ref`. Common reasons include `duplicate`, `low_relevance`, `stale`, `unsafe`, `private`, `license_restricted`, `contradicted`, `unavailable`, and `out_of_scope`.
