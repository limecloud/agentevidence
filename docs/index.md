---
layout: home

title: Agent Evidence
description: Portable evidence, provenance, review, replay, redaction, and audit export standard for agents.

hero:
  name: Agent Evidence
  text: Portable trust records for agent work.
  tagline: Make answers, artifacts, tool decisions, reviews, redactions, and replays auditable without turning evidence into a UI, runtime, trace backend, or storage system.
  actions:
    - theme: brand
      text: Read the specification
      link: /en/specification
    - theme: alt
      text: 中文规范
      link: /zh/specification
    - theme: alt
      text: LLM full context
      link: /llms-full.txt
    - theme: alt
      text: Standards ecosystem
      link: /en/reference/agent-ecosystem

features:
  - title: Claim-level grounding
    details: Connect each claim to supporting, contradicting, qualifying, or background evidence instead of relying on loose citations.
  - title: Provenance that survives review
    details: Preserve source, tool, model, artifact, human, peer-agent, runtime, trace, and span refs as a portable production graph.
  - title: Verification is not review
    details: Keep automated checks, human verdicts, waivers, rubrics, and sign-off facts separate but linked.
  - title: Replay honesty
    details: Describe what can be reconstructed, what is approximate, and which facts are unavailable, expired, redacted, or not collected.
  - title: Redaction-aware export
    details: Share audit packs with stable ids, hashes, schemas, access metadata, and explicit redaction records.
  - title: AI-friendly docs
    details: Publish llms.txt, llms-full.txt, public JSON Schemas, examples, and versioned snapshots for agent consumption.
---

## What Agent Evidence Defines

Agent Evidence is the trust layer around agent work. It packages the facts needed to inspect, verify, review, replay, redact, and export an agent outcome.

| Contract | What it answers |
| --- | --- |
| [Evidence Pack](/en/contracts/evidence-pack) | What scoped outcome is being audited, and how complete is the evidence? |
| [Claim Map](/en/contracts/claim-map) | Which claims were made, and how is each claim supported or challenged? |
| [Source Map](/en/contracts/source-map) | Which sources were selected, omitted, stale, contradicted, or unavailable? |
| [Provenance Chain](/en/contracts/provenance-chain) | Which tools, models, artifacts, humans, peers, and runtime steps produced the outcome? |
| [Verification and Review](/en/contracts/verification-review) | Which checks ran, and who or what issued a verdict? |
| [Replay Case](/en/contracts/replay-case) | What can be reconstructed, and which facts are missing? |
| [Redaction and Privacy](/en/contracts/redaction-privacy) | What was transformed or withheld before sharing? |
| [Export Manifest](/en/contracts/export-manifest) | Which files, schemas, hashes, access rules, and completeness states were exported? |

## Start Here

- [What is Agent Evidence?](/en/what-is-agent-evidence)
- [Latest specification](/en/specification)
- [Implementation quickstart](/en/authoring/quickstart)
- [Acceptance scenarios](/en/authoring/acceptance-scenarios)
- [JSON Schemas](/en/reference/json-schemas)
- [v0.1.2 overview](/en/versions/v0.1.2/overview)

## 中文入口

- [什么是 Agent Evidence？](/zh/what-is-agent-evidence)
- [最新规范](/zh/specification)
- [快速开始](/zh/authoring/quickstart)
- [验收场景](/zh/authoring/acceptance-scenarios)
- [JSON Schemas](/zh/reference/json-schemas)

## LLM Entrypoints

- [llms.txt](/llms.txt): concise navigation index for AI clients.
- [llms-full.txt](/llms-full.txt): current English documentation concatenated with source URLs.
- [llm.txt](/llm.txt) and [llm-full.txt](/llm-full.txt): compatibility aliases.

## Agent Standards Ecosystem

Agent Evidence is part of a connected standards family:

- [Agent Knowledge](https://limecloud.github.io/agentknowledge/)
- [Agent UI](https://limecloud.github.io/agentui/)
- [Agent Runtime](https://limecloud.github.io/agentruntime/)
- [Agent Evidence](https://limecloud.github.io/agentevidence/)

See the [Agent standards ecosystem](/en/reference/agent-ecosystem) page for mutual links and future standard candidates.
