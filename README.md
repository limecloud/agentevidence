# Agent Evidence

Agent Evidence is a portable draft standard for agent evidence, provenance, verification, review, replay, redaction, and audit export.

It interoperates with runtime, UI, knowledge, artifact, telemetry, policy, tool, task, and peer-agent systems without taking ownership of those systems. Runtime produces execution facts. UI renders evidence. Knowledge and retrieval systems provide source material. Artifact services own bytes and versions. Evidence packages the trust graph that links outcomes to support, contradiction, review, replay, privacy, and export facts.

## What v0.1.0 defines

- Evidence Pack as the portable container for scoped evidence.
- Claim maps that connect assertions to supporting, contradicting, qualifying, and background evidence.
- Source maps with selectors, snippets, retrieval metadata, omissions, trust, freshness, and counter-evidence.
- Provenance chains for entities, activities, agents, tools, models, artifacts, humans, and peer systems.
- Verification results and review verdicts as separate facts.
- Replay cases, redaction records, privacy metadata, telemetry correlation, and export manifests.
- Public JSON Schemas and LLM-friendly `llms.txt` / `llms-full.txt` entrypoints.

## Documentation

- [Specification](docs/en/specification.md)
- [Evidence model](docs/en/concepts/evidence-model.md)
- [Evidence pack](docs/en/contracts/evidence-pack.md)
- [Claim map](docs/en/contracts/claim-map.md)
- [Source map](docs/en/contracts/source-map.md)
- [Provenance chain](docs/en/contracts/provenance-chain.md)
- [Verification and review](docs/en/contracts/verification-review.md)
- [Replay case](docs/en/contracts/replay-case.md)
- [JSON Schemas](docs/en/reference/json-schemas.md)
- [Research sources](docs/en/reference/research-sources.md)
- [中文规范](docs/zh/specification.md)

## LLM entrypoints

- [`llms.txt`](llms.txt): concise navigation index for AI clients.
- [`llms-full.txt`](llms-full.txt): concatenated current English documentation with source URLs.
- [`llm.txt`](llm.txt) and [`llm-full.txt`](llm-full.txt): compatibility aliases.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated at `docs/.vitepress/dist`.
