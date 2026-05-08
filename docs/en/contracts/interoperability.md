---
title: Interoperability
description: Boundaries with adjacent protocols.
---

# Interoperability

Agent Evidence is a bridge, not a replacement for existing standards.

| Standard or system | Relationship |
| --- | --- |
| Agent Runtime | Runtime produces execution facts; evidence packages trust, review, replay, and audit facts. |
| Agent UI | UI displays evidence; evidence owns portable review/read models. |
| Agent Knowledge | Knowledge provides source-grounded material; evidence records selected, omitted, stale, and contradicted source refs. |
| Agent Artifact | Artifact systems own bytes, versions, previews, and diffs; evidence links artifact refs and reviews. |
| A2A | Peer tasks, messages, and artifacts can be cited; evidence preserves native peer ids and remote refs. |
| MCP | Tool calls and resources can become source/provenance refs; evidence does not define tool schemas. |
| OpenTelemetry | Traces, spans, logs, metrics, and GenAI operation names are referenced for correlation. |
| CloudEvents | Event envelopes can carry evidence events. |
| W3C PROV | Entity/activity/agent pattern informs provenance chains. |
| W3C Web Annotation | Selectors and targets inform claim/source anchoring. |
| in-toto / SLSA | Attestation and provenance patterns inform signed export and build-style evidence. |
| OpenLineage | Run/job/dataset facets inform data lineage interoperability. |
| CycloneDX | Attestations, claims, evidence, counter-evidence, declarations, and confidence inform audit packaging. |

Interoperability means preserving native ids and semantics while adding evidence-specific relationships. Agent Evidence should not flatten every upstream concept into generic text.
