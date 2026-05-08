---
title: Source analysis
description: Implementation pressure behind Agent Evidence.
---

# Source analysis

Agent Evidence is motivated by repeated pressure in real agent products:

- Answers cite sources, but teams cannot tell which claim each source supports.
- Tool results affect decisions, but later reviews see only final prose.
- Runtime traces exist, but trace backends do not explain claim support, contradiction, omission, or review state.
- Generated artifacts need review, diff, version, export, and source evidence.
- Private data must be redacted without erasing the shape of the audit record.
- Long-running and remote agent tasks need evidence that survives disconnects and system boundaries.
- Support teams need portable exports that contain facts, hashes, schemas, and redaction state.
- Evals and audits need to distinguish unsupported claims from uncollected evidence.

The standard therefore focuses on portable evidence graphs rather than another logging, tracing, or citation format.

## Mapping from pressure to contract

| Pressure | Contract |
| --- | --- |
| Claim-level trust | Claim map and support edges. |
| Source selection and omission | Source map. |
| Tool/model/human production chain | Provenance chain. |
| Audit checks | Verification results. |
| Human sign-off | Review verdicts. |
| Reconstruction | Replay case. |
| Safe sharing | Redaction and privacy records. |
| Cross-system support | Export manifest and telemetry correlation. |
