---
title: Implementation quickstart
description: How to implement Agent Evidence v0.1.0.
---

# Implementation quickstart

1. Pick a scope: answer, artifact, task, run, session, review, incident, or support case.
2. Create an `evidence_pack_id` and write pack metadata.
3. Extract claims from the answer or artifact and assign stable `claim_id` values.
4. Link each claim to source refs or mark it `unsupported`, `unverified`, `contradicted`, or `not_applicable`.
5. Attach provenance refs from runtime, tools, retrieval, model requests, artifacts, peer systems, and human decisions.
6. Attach verification results and review verdicts as separate facts.
7. Record redactions, omissions, expired refs, and missing facts honestly.
8. Export a manifest with files, hashes, schemas, access, and completeness status.

## Minimal example

```json
{
  "evidence_pack_id": "evp_123",
  "schema_version": "0.1.0",
  "scope": { "task_id": "task_123", "artifact_id": "artifact_456" },
  "status": "ready",
  "created_at": "2026-05-08T00:00:00Z",
  "updated_at": "2026-05-08T00:00:00Z",
  "producer": { "id": "runtime_1", "type": "runtime" },
  "claims": [
    { "claim_id": "claim_1", "text": "The policy requires review.", "status": "supported" }
  ],
  "sources": [
    { "source_id": "src_1", "source_kind": "document", "uri": "knowledge://policy/review" }
  ],
  "support_edges": [
    { "edge_id": "edge_1", "claim_id": "claim_1", "source_id": "src_1", "relationship": "supports" }
  ],
  "completeness": {
    "claims": { "status": "complete" },
    "sources": { "status": "complete" },
    "telemetry": { "status": "not_collected" }
  }
}
```

## Implementation checklist

- Generate ids before redaction so refs remain stable.
- Store large payloads in owner systems and reference them from the pack.
- Keep verification and review records append-only where possible.
- Preserve selected and omitted source records.
- Expose JSON Schemas for validators and export consumers.
- Add at least one acceptance test for redacted export and one for contradiction.
