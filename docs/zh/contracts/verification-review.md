---
title: Verification and review
description: Checks、verdicts、rubrics 与 sign-off。
---

# Verification and review

Verification 检查事实。Review 做出 verdict。二者应关联，但不能合并。

## Verification result

| Field | 目的 |
| --- | --- |
| `verification_id` | Stable check id。 |
| `check_type` | `citation`、`source_freshness`、`schema`、`policy`、`artifact_diff`、`replay`、`safety`、`privacy`、`human_required` 或 custom。 |
| `status` | `passed`、`failed`、`warning`、`skipped`、`not_applicable`、`error`。 |
| `coverage` | 被检查的 claims、sources、artifacts、steps 或 pack categories。 |
| `severity` | check 报告 issues 时使用 `info`、`low`、`medium`、`high`、`critical`。 |
| `evidence_refs` | Check 使用的 facts。 |
| `issues` | 结构化 failures、warnings、missing facts 或 remediation hints。 |
| `checked_at` | Timestamp。 |

## Review verdict

Review verdicts SHOULD 记录 reviewer identity 或 role、rubric、decision、notes、timestamps、scope、linked checks 与 conditions。Verdicts 包括 `approved`、`rejected`、`needs_changes`、`escalated`、`waived` 与 `informational`。

## Separation rules

- Verification result MUST NOT 覆盖 review verdict。
- Review verdict SHOULD 引用它考虑过的 verification results。
- Failed check MAY 被 waived，但 waiver 必须 explicit。
- Review MAY scoped 到一个 claim、一个 artifact section、一个 pack 或一个 export。
