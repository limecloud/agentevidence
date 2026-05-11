---
title: Runtime profile test cases
description: Test matrix for evidence packs sourced from Agent Runtime-compatible facts.
---

# Runtime profile test cases

Use these cases when Agent Evidence consumes Agent Runtime, Lime AgentRuntime Profile, or an equivalent runtime spine. The goal is to prove that evidence, replay, review, and audit exports all consume the same runtime facts instead of rebuilding independent summaries.

## Canonical boundary

```text
RuntimeEvent / ThreadReadModel / TaskSnapshot
  -> EvidencePack / ReplayCase / ReviewRecord / ExportManifest
  -> Agent UI timeline, review lane, replay lane, and audit entrypoints
```

Agent Runtime owns execution facts. Agent Evidence owns portable evidence packaging, provenance, verification, review, replay, redaction, and export. Evidence may summarize runtime facts, but it must not invent runtime status or known gaps.

## Required runtime correlation

Evidence records SHOULD preserve these ids when available:

| Field | Purpose |
| --- | --- |
| `runtime_id` / `session_id` / `thread_id` / `turn_id` | Join evidence to the execution spine. |
| `task_id` / `run_id` / `attempt_id` | Join evidence to task attempts and retry history. |
| `step_id` / `tool_call_id` / `action_id` | Join evidence to tools, actions, permission waits, and failures. |
| `artifact_id` / `context_id` / `policy_decision_id` | Join evidence to adjacent owners. |
| `trace_id` / `span_id` | Join evidence to telemetry when collected. |
| `evidence_pack_id` / `replay_id` / `review_id` / `export_id` | Join downstream evidence artifacts. |

## Test cases

| ID | Case | Input facts | Expected result |
| --- | --- | --- | --- |
| AEV-AR-ID-001 | Evidence pack preserves runtime spine | Completed or failed turn | Pack scope includes `session_id/thread_id/turn_id` and applicable task/run ids. |
| AEV-AR-ID-002 | Failed attempt remains visible | `task.attempt.failed` then retry | Evidence timeline includes both failed and retried attempts. |
| AEV-AR-TOOL-001 | Tool failure is auditable | `tool.failed` with `tool_call_id` | Evidence links failure category, output refs, and telemetry refs without losing `tool_call_id`. |
| AEV-AR-ACTION-001 | Permission denial is not success | `action.required -> action.resolved(deny)` | Evidence records denied decision and does not claim tool execution success. |
| AEV-AR-ROUTE-001 | Routing decision is explainable | `routing.single_candidate` or `routing.decided` | Evidence includes selected model, decision source, and cost/limit refs if available. |
| AEV-AR-REPLAY-001 | Replay uses same source facts | Evidence pack already exists | Replay case points to pack/source ids instead of rebuilding a second timeline. |
| AEV-AR-REVIEW-001 | Review uses same source facts | Review generated from pack | Review verdict references evidence ids and runtime scope; it does not create parallel status truth. |
| AEV-AR-GAP-001 | Known gaps are only applicable gaps | No matching request telemetry | Pack records empty/unavailable telemetry summary, not fake `unlinked` evidence. |
| AEV-AR-REDACT-001 | Redaction preserves auditability | Sensitive tool/context output | Redacted pack keeps redaction reason, policy refs, and safe source refs. |
| AEV-AR-EXPORT-001 | Export manifest is complete | Evidence export requested | Manifest lists pack, replay, review, schema, redaction, and runtime scope refs. |

## Failure cases

These are incompatible with Agent Evidence:

1. Replay, review, and evidence each construct different timelines for the same turn.
2. A missing telemetry relationship is exported as a fabricated session-level evidence item.
3. Evidence claims a tool succeeded when runtime only has a denied action or failed tool event.
4. Redaction removes the reason and owner, making the audit trail unverifiable.
5. Evidence pack lacks enough runtime ids to join back to the originating turn or task.

## Minimum validation set

For Agent Runtime-compatible integration, run at least:

1. AEV-AR-ID-001 and AEV-AR-ID-002.
2. AEV-AR-TOOL-001, AEV-AR-ACTION-001, and AEV-AR-ROUTE-001.
3. AEV-AR-REPLAY-001 and AEV-AR-REVIEW-001.
4. AEV-AR-GAP-001 and AEV-AR-EXPORT-001.

Runtime proves what happened. Agent Evidence proves how that runtime fact can be trusted, replayed, reviewed, redacted, and exported.
