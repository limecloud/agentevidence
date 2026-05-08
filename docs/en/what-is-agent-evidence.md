---
title: What is Agent Evidence?
description: Conceptual entry point for Agent Evidence.
---

# What is Agent Evidence?

Agent Evidence defines the trust layer around agent work. It is not a trace backend, not a citation renderer, not a document store, and not a compliance verdict. It is the portable record that connects an agent outcome to the facts needed to inspect, replay, verify, review, redact, and export it.

Use Agent Evidence when a product needs stable semantics for:

- claim-to-source grounding and counter-evidence.
- tool, retrieval, model, artifact, peer-agent, and human-decision provenance.
- verification checks and review verdicts that are related but not collapsed.
- replay instructions and reconstruction boundaries.
- redaction, retention, privacy, access, and export-safety state.
- audit, support, incident, compliance, and customer-handoff exports.
- cross-system correlation with runtime ids, trace ids, span ids, event ids, source ids, and artifact ids.

Do not use it to define model APIs, UI components, tool protocols, artifact storage, observability storage, legal policy, or knowledge-pack authoring. Those systems remain adjacent owners.

## Layer map

| Layer | Question | Evidence facts |
| --- | --- | --- |
| `claim` | What was asserted? | claim id, text/range, status, confidence, support links. |
| `source` | What supports, qualifies, or contradicts it? | source refs, snippets, selectors, retrieval metadata, omissions. |
| `provenance` | How was it produced? | runtime ids, trace/span refs, tools, models, humans, artifacts, peer refs. |
| `verification` | What checks ran? | check results, coverage, failures, warnings. |
| `review` | Who judged it? | reviewer, verdict, rubric, notes, sign-off. |
| `replay` | Can it be reconstructed? | inputs, snapshots, cursors, determinism, missing facts. |
| `privacy` | What is safe to share? | redactions, retention, access, export policy. |

## Design principle

Evidence should be a graph of references and small structured facts. Large payloads, raw traces, documents, artifacts, and private tool outputs should remain in their owning systems and be referenced by stable ids, URLs, hashes, or exporter manifests.

## Minimum compatible outcome

A minimal compatible implementation can start with a single evidence pack that records claims, sources, support edges, provenance refs, verification status, completeness, and export metadata. It can then grow toward richer review, replay, redaction, and telemetry correlation without changing the core identity model.
