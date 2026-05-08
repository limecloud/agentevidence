---
title: JSON Schemas
description: Public Agent Evidence JSON Schemas.
---

# JSON Schemas

Agent Evidence v0.1.0 publishes JSON Schemas for validation, export negotiation, and LLM/tool integration. The schemas are intentionally extensible with `additionalProperties` so implementations can carry domain-specific refs without breaking the standard contract.

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

- Validate structure first, then validate relationship invariants.
- Treat schema validation as necessary but not sufficient for trust.
- Reject malformed ids and timestamps early.
- Keep custom fields namespaced when they are product-specific.
- Record validation failures as `verification_result` facts when they affect a pack.
