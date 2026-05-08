---
title: Artifact review
description: generated artifact review 的 evidence 示例。
---

# Artifact review

Artifact review evidence 应链接 artifact version、checks、diff 与 verdict，但不复制 bytes。

```json
{
  "scope": { "artifact_id": "artifact_1", "artifact_version_id": "v3" },
  "claims": [
    { "claim_id": "section_intro", "claim_type": "artifact_section", "range_ref": "artifact://artifact_1/v3#section=intro", "status": "supported" }
  ],
  "verification_results": [
    { "verification_id": "check_schema", "check_type": "schema", "status": "passed", "coverage": [{ "artifact_id": "artifact_1", "version_id": "v3" }] },
    { "verification_id": "check_diff", "check_type": "artifact_diff", "status": "warning", "issues": [{ "severity": "medium", "message": "Large introduction rewrite requires editorial review." }] }
  ],
  "reviews": [
    { "review_id": "review_1", "verdict": "approved", "reviewer": { "role": "editor" }, "conditions": ["schema check passed"] }
  ],
  "artifact_refs": [
    { "artifact_id": "artifact_1", "version_id": "v3", "diff_ref": "diff://artifact_1/v2..v3", "read_ref": "artifact://artifact_1/v3" }
  ]
}
```
