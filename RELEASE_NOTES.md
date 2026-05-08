# Agent Evidence v0.1.0

Agent Evidence v0.1.0 defines the first portable evidence standard for agent work. It makes agent outcomes reviewable, replayable, auditable, redaction-aware, and source-grounded without replacing runtime, telemetry, knowledge, artifact, policy, tool, peer-agent, or UI systems.

## Highlights

- Defines Evidence Pack as the portable container for scoped evidence.
- Adds claim maps that connect claims to supporting, contradicting, qualifying, and background evidence.
- Adds source maps with selectors, snippets, retrieval metadata, omissions, trust, freshness, and counter-evidence.
- Adds provenance chains for model calls, retrieval, tools, artifacts, human decisions, peer systems, runtime ids, and trace ids.
- Separates verification results from review verdicts.
- Adds replay cases, redaction records, privacy metadata, telemetry correlation, evidence events, and export manifests.
- Adds public JSON Schemas and LLM-friendly documentation entrypoints.

## Validation

- `npm run build`
- `VITEPRESS_BASE="/agentevidence/" npm run build`
- `npm audit --omit=dev`
- `npm pack --dry-run`
- JSON Schema parse
- Root/public LLM file consistency checks
- Forbidden local-coupling scan
