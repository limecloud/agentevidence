---
title: Redaction and privacy
description: Privacy, redaction, retention, and access controls.
---

# Redaction and privacy

Evidence often contains sensitive prompts, tool results, user data, credentials, private documents, licensed data, or regulated records. Redaction must be explicit and auditable.

## Redaction record

| Field | Purpose |
| --- | --- |
| `redaction_id` | Stable redaction id. |
| `target_ref` | Claim, source, snippet, trace, artifact, review note, or field affected. |
| `redaction_kind` | `remove`, `mask`, `hash`, `tokenize`, `summarize`, `withhold`, `expire`. |
| `reason` | `privacy`, `secret`, `policy`, `license`, `safety`, `retention`, `legal`, `user_request`. |
| `applied_by` | System, policy, human, exporter, or owner. |
| `replacement_ref` | Optional safe replacement, digest, token, or summary. |
| `applied_at` | Timestamp. |

A redacted pack SHOULD remain structurally useful. It should expose that a fact existed, what category was removed, and whether verification is still possible.

## Access and retention

Evidence exports SHOULD include intended audience, retention class, expiry, allowed use, and whether downstream systems may re-identify tokenized values. Expired refs SHOULD become `expired`, not silently disappear.
