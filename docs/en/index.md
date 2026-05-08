---
title: Agent Evidence
description: Portable evidence, provenance, review, and replay standard for agents.
---

# Agent Evidence

Agent Evidence is a portable standard for making agent work reviewable, replayable, auditable, and source-grounded. It defines how claims, sources, artifacts, traces, verification results, reviews, redactions, and replay instructions are packaged without replacing runtime, telemetry, knowledge, artifact, policy, or UI systems.

## Why it exists

Agent products can generate useful answers and artifacts, but production teams need to answer harder questions:

- Which claim is supported by which source?
- Which tool, retrieval, model, human decision, or peer task produced a result?
- Can the run be replayed or reviewed later?
- What was redacted, omitted, expired, unavailable, or never collected?
- Which verification checks passed, failed, warned, or were not applicable?
- Can evidence move across UI, runtime, audit, compliance, and support systems?

Agent Evidence standardizes those portable evidence records.

## Quick links

- [Specification](./specification.md)
- [Evidence pack](./contracts/evidence-pack.md)
- [Claim map](./contracts/claim-map.md)
- [Source map](./contracts/source-map.md)
- [Verification and review](./contracts/verification-review.md)
- [Replay case](./contracts/replay-case.md)
- [JSON Schemas](./reference/json-schemas.md)
- [Research sources](./reference/research-sources.md)

## Agent Standards Ecosystem

Agent products need multiple standards working together: Knowledge for source-grounded context, Runtime for execution facts, UI for interaction surfaces, and Evidence for trust, review, replay, and export.

- [Agent standards ecosystem](./reference/agent-ecosystem.md)
- [Agent Knowledge](https://limecloud.github.io/agentknowledge/)
- [Agent UI](https://limecloud.github.io/agentui/)
- [Agent Runtime](https://limecloud.github.io/agentruntime/)
- [Agent Evidence](https://limecloud.github.io/agentevidence/)
