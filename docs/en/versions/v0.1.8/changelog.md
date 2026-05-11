---
title: v0.1.8 changelog
description: Agent Evidence v0.1.8 changelog.
---

# v0.1.8 Changelog

### Added

- Adds Agent Runtime profile test cases in English and Simplified Chinese, covering runtime spine ids, tool failures, permission denial, routing decisions, evidence packs, replay, review, known gaps, redaction, and export manifests.

### Changed

- Aligns interoperability guidance with Agent Runtime `RuntimeEvent`, `ThreadReadModel`, and `TaskSnapshot` sources.
- Extends event and evidence pack schemas with optional runtime profile correlation fields such as `attempt_id`, `step_id`, `tool_call_id`, `action_id`, `context_id`, and `policy_decision_id`.
