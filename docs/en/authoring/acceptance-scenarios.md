---
title: Acceptance scenarios
description: Behavior-level validation for Agent Evidence.
---

# Acceptance scenarios

A compatible implementation should pass these behavior scenarios.

## Claim grounding

Given an answer with three factual claims, the evidence pack records three claim ids, links two to supporting sources, and marks the third `unverified` with a missing-source reason.

## Contradiction

Given two selected sources disagree, the claim status becomes `contradicted` or `partially_supported`, and the counter-evidence edge is retained.

## Tool provenance

Given an answer derived from a tool call, the pack links the claim to the tool result ref, the tool call id, and the runtime span id when available.

## Retrieval omission

Given a source was retrieved but rejected as stale or out of scope, the source map records an omission reason rather than deleting the source from the audit trail.

## Artifact review

Given a generated artifact, the pack links artifact version, diff ref, verification checks, and review verdict without embedding full artifact bytes.

## Verification vs review

Given a schema check passes but a human reviewer requests changes, the pack records `passed` verification and `needs_changes` review without treating either as authoritative over the other.

## Redacted export

Given private source text, the exported pack replaces snippets with redacted refs, keeps claim ids and source ids stable, and marks verification coverage as partial.

## Replay honesty

Given a non-deterministic model response and expired external API result, the replay case marks model output as approximate and API output as unavailable.

## Telemetry absence

Given no trace backend was connected, the pack marks telemetry as `not_collected` instead of inferring that no runtime errors happened.

## Peer handoff

Given a peer agent returns an artifact and message id, evidence preserves native peer ids and links them to local claims without rewriting the peer records.

## Agent Runtime profile evidence

Given a runtime turn exports evidence, the evidence pack preserves runtime correlation ids, replay and review use the same source facts, and missing telemetry is marked `not_collected` or `unavailable` rather than fabricated as evidence. See [Runtime profile test cases](./runtime-profile-test-cases).
