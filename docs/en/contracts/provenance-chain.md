---
title: Provenance chain
description: Production graph for agent outcomes.
---

# Provenance chain

The provenance chain explains how an outcome was produced. It borrows the entity/activity/agent pattern from W3C PROV, but keeps Agent Evidence focused on portable refs and agent execution.

## Node types

| Node | Examples |
| --- | --- |
| `entity` | prompt, input part, retrieved source, tool result, artifact, answer, claim, dataset row, policy, exported file. |
| `activity` | model request, retrieval, tool call, human approval, verification check, review, export, redaction, peer handoff. |
| `agent` | user, assistant, runtime, tool server, reviewer, policy system, model provider, peer agent, organization. |

## Edge rules

- An output entity SHOULD be `generated_by` an activity.
- An activity SHOULD list inputs it `used`.
- A transformed entity SHOULD link to its source through `derived_from`.
- Human or automated responsibility SHOULD use `attributed_to` or `associated_with`.
- Provenance edges SHOULD carry timestamps, confidence, and source ids in the edge itself.
- Peer or remote systems SHOULD preserve native ids instead of rewriting them as local-only ids.

## Runtime and telemetry linkage

Provenance nodes MAY reference `runtime_id`, `session_id`, `thread_id`, `turn_id`, `task_id`, `run_id`, `tool_call_id`, `artifact_id`, `trace_id`, and `span_id`. These ids are correlation refs, not replacements for provenance semantics.
