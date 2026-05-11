---
layout: home
title: Agent Evidence
description: Portable trust records for agent work.

hero:
  name: Agent Evidence
  text: Portable trust records for agent work.
  tagline: "Make answers, artifacts, tool decisions, reviews, redactions, and replays auditable without becoming the runtime, UI, trace backend, or storage system."
  actions:
    - theme: brand
      text: Read the specification
      link: /en/specification
    - theme: alt
      text: Implementation quickstart
      link: /en/authoring/quickstart
    - theme: alt
      text: Standards ecosystem
      link: /en/reference/agent-ecosystem
    - theme: alt
      text: LLM full context
      link: ../llms-full.txt

features:
  - title: Claim-level grounding
    details: "Connect every important assertion to supporting, contradicting, qualifying, or background evidence."
  - title: Portable provenance
    details: "Preserve source, tool, model, artifact, human, peer-agent, runtime, trace, and span refs as a production graph."
  - title: Verification is not review
    details: "Keep automated checks, human verdicts, waivers, rubrics, sign-off facts, and open issues separate but linked."
  - title: Replay honesty
    details: "Describe what can be reconstructed, what is approximate, and which facts are missing, expired, redacted, or unavailable."
  - title: Redaction-aware export
    details: "Share evidence packs with stable ids, schemas, hashes, access metadata, and explicit redaction records."
  - title: AI-friendly docs
    details: "Publish llms.txt, llms-full.txt, JSON Schemas, examples, and versioned snapshots for agent consumption."
---

## What Agent Evidence Defines

| Contract | What it answers |
| --- | --- |
| Evidence pack | What scoped outcome is being audited, and how complete is the evidence? |
| Claim map | Which claims were made, and how is each claim supported, contradicted, qualified, or left unsupported? |
| Source map | Which sources were selected, omitted, stale, contradicted, redacted, or unavailable? |
| Provenance chain | Which tools, models, artifacts, humans, peers, runtime events, traces, and spans produced the outcome? |
| Verification and review | Which checks ran, and who or what issued a verdict? |
| Replay and export | What can be reconstructed, and what is safe to share? |

## Start Here

- [What is Agent Evidence?](./what-is-agent-evidence.md)
- [Latest specification](./specification.md)
- [Runtime profile test cases](./authoring/runtime-profile-test-cases.md)
- [Evidence model](./concepts/evidence-model.md)
- [Evidence pack](./contracts/evidence-pack.md)
- [Claim map](./contracts/claim-map.md)
- [Agent standards ecosystem](./reference/agent-ecosystem.md)

## For AI Clients

- [llms.txt](../llms.txt): concise navigation index.
- [llms-full.txt](../llms-full.txt): current English core documentation in one file.
- [llm.txt](../llm.txt) and [llm-full.txt](../llm-full.txt): compatibility aliases.

## Agent Standards Ecosystem

Evidence owns trust, review, replay, redaction, and export records. Runtime owns execution, UI owns projection, Knowledge owns source-grounded context, and Artifact systems own durable deliverables.
