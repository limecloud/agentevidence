---
title: Claim map
description: Claim grounding and support relationships.
---

# Claim map

A claim map records what the agent asserted and how each assertion is supported, contradicted, qualified, reviewed, or left unverified.

## Claim record

| Field | Purpose |
| --- | --- |
| `claim_id` | Stable claim id. |
| `claim_type` | `fact`, `recommendation`, `decision`, `summary`, `generated_field`, `artifact_section`, `policy`, `risk`, or custom. |
| `text` / `range_ref` | Claim text or pointer into answer/artifact. |
| `status` | `supported`, `partially_supported`, `unsupported`, `contradicted`, `unverified`, `not_applicable`. |
| `confidence` | Optional calibrated confidence, rubric score, or confidence band. |
| `support_edges` | Links to source refs, verification results, artifact refs, telemetry refs, or provenance facts. |
| `risk` | User, safety, legal, financial, medical, operational, security, privacy, or business risk class. |
| `owner_ref` | Optional user, agent, policy, artifact, or external owner of the claim. |

Claims SHOULD be granular enough to review. A whole answer as one claim is usually too coarse.

## Support edge

| Relationship | Meaning |
| --- | --- |
| `supports` | Evidence directly supports the claim. |
| `partially_supports` | Evidence supports part of the claim or requires qualifications. |
| `contradicts` | Evidence conflicts with the claim. |
| `qualifies` | Evidence narrows scope, applicability, or conditions. |
| `background` | Evidence is context but not direct support. |
| `generated_from` | Claim was derived from a tool result, model output, artifact, or human instruction. |
| `verified_by` | Claim was checked by a verification result. |
| `reviewed_by` | Claim was considered by a review verdict. |

## Claim status rules

- `supported` requires at least one supporting edge and no unresolved contradiction of equal or higher authority.
- `partially_supported` is preferred when evidence supports only a subset of the claim.
- `contradicted` must preserve the counter-evidence edge.
- `unverified` is honest when the system did not check or cannot check support.
- `not_applicable` should be used for opinion, formatting, or non-evidentiary content.
