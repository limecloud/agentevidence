---
title: Verification and review
description: Checks, verdicts, rubrics, and sign-off.
---

# Verification and review

Verification checks facts. Review makes a verdict. They should be linked but not collapsed.

## Verification result

| Field | Purpose |
| --- | --- |
| `verification_id` | Stable check id. |
| `check_type` | `citation`, `source_freshness`, `schema`, `policy`, `artifact_diff`, `replay`, `safety`, `privacy`, `human_required`, or custom. |
| `status` | `passed`, `failed`, `warning`, `skipped`, `not_applicable`, `error`. |
| `coverage` | Which claims, sources, artifacts, steps, or pack categories were checked. |
| `severity` | `info`, `low`, `medium`, `high`, `critical` when the check reports issues. |
| `evidence_refs` | Facts used by the check. |
| `issues` | Structured failures, warnings, missing facts, or remediation hints. |
| `checked_at` | Timestamp. |

## Review verdict

Review verdicts SHOULD record reviewer identity or role, rubric, decision, notes, timestamps, scope, linked checks, and conditions. Verdicts include `approved`, `rejected`, `needs_changes`, `escalated`, `waived`, and `informational`.

## Separation rules

- A verification result MUST NOT overwrite a review verdict.
- A review verdict SHOULD reference the verification results it considered.
- A failed check MAY still be waived, but the waiver must be explicit.
- A review MAY be scoped to one claim, one artifact section, one pack, or one export.
