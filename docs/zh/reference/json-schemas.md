---
title: JSON Schemas
description: Agent Evidence public JSON Schemas。
---

# JSON Schemas

Agent Evidence v0.1.0 发布 JSON Schemas，用于 validation、export negotiation 与 LLM/tool integration。这些 schemas 故意保留 `additionalProperties`，让实现可以携带 domain-specific refs，而不破坏标准契约。

## Public schemas


- [Evidence pack schema](/schemas/agentevidence-pack.schema.json)
- [Evidence event schema](/schemas/agentevidence-event.schema.json)
- [Claim map schema](/schemas/agentevidence-claim-map.schema.json)
- [Source map schema](/schemas/agentevidence-source-map.schema.json)
- [Provenance schema](/schemas/agentevidence-provenance.schema.json)
- [Verification schema](/schemas/agentevidence-verification.schema.json)
- [Replay schema](/schemas/agentevidence-replay.schema.json)
- [Export manifest schema](/schemas/agentevidence-export-manifest.schema.json)


## Validation guidance

- 先验证结构，再验证 relationship invariants。
- Schema validation 是 trust 的必要条件，但不是充分条件。
- 尽早拒绝 malformed ids 与 timestamps。
- Product-specific custom fields 应尽量 namespace。
- 当 validation failures 影响 pack 时，把它们记录为 `verification_result` facts。
