---
title: Ecosystem boundaries
description: Boundaries between Agent Evidence and adjacent systems.
---

# Ecosystem boundaries

Agent Evidence connects adjacent systems without absorbing their ownership.

| System | Owns | Evidence relationship |
| --- | --- | --- |
| Agent Runtime | Execution facts, tasks, tool calls, permissions, snapshots. | Evidence references runtime ids and exports trust graphs. |
| Agent UI | Evidence display, citations, review panels, local affordances. | UI consumes evidence read models and submits review actions. |
| Agent Knowledge | Source-grounded knowledge packs and source metadata. | Evidence records selected, omitted, and contradicted source refs. |
| Agent Artifact | Content bytes, versions, diffs, previews, export bytes. | Evidence links artifact refs, versions, claims, and review facts. |
| Telemetry systems | Traces, spans, logs, metrics. | Evidence references trace/span ids and summarizes completeness. |
| Policy systems | Approval, risk, retention, access rules. | Evidence records decisions and redaction/retention facts. |
| A2A peers | Remote tasks, messages, artifacts. | Evidence preserves peer ids and remote artifact/source refs. |
| MCP servers | Tools, resources, prompts. | Evidence links tool/resource refs and invocation facts. |
| Compliance systems | Business rules and legal interpretation. | Evidence exports facts; compliance systems make domain verdicts. |
