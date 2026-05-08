---
title: Replay case
description: Replay and reconstruction contract.
---

# Replay case

A replay case describes what is needed to reconstruct or approximate an agent run.

## Replay record

| Field | Purpose |
| --- | --- |
| `replay_id` | Stable replay id. |
| `scope` | Session, task, run, turn, artifact, review, or export scope. |
| `input_refs` | User input, attachments, context, model config, tool args, and policy refs. |
| `snapshot_refs` | Runtime, context, tool inventory, policy, source, and artifact snapshots. |
| `trace_refs` | Trace ids, span ids, logs, metrics, or external telemetry refs. |
| `determinism` | `deterministic`, `approximate`, `non_deterministic`, or `unavailable`. |
| `missing_facts` | Facts needed but unavailable, expired, redacted, not collected, or not applicable. |
| `expected_outputs` | Claims, artifacts, checks, diffs, hashes, or summaries to compare. |
| `replay_steps` | Optional ordered instructions or machine-readable steps. |

Replay cases SHOULD be honest about non-deterministic model output and unavailable external services. They are evidence for reconstruction, not a guarantee that future output will match byte-for-byte.

## Replay outcomes

A replay attempt SHOULD record whether it matched expected claims, artifact hashes, verification results, or review conditions. A mismatch is evidence, not an automatic failure of the original pack.
