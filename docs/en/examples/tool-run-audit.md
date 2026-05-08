---
title: Tool run audit
description: Example evidence for tool-derived decisions.
---

# Tool run audit

When a tool result affects an answer, record both the result ref and the runtime invocation. Tool args and outputs may be sensitive, so the evidence pack can point to a redacted summary and a secure raw ref.

```json
{
  "scope": { "task_id": "task_balance_check", "run_id": "run_1" },
  "claims": [
    { "claim_id": "c_balance", "text": "The account has enough balance for renewal.", "status": "supported" }
  ],
  "sources": [
    { "source_id": "tool_result_1", "source_kind": "tool_result", "ref": "tool-result://balance/123", "privacy": { "classification": "restricted" } }
  ],
  "provenance": {
    "nodes": [
      { "node_id": "tool_call_1", "type": "activity", "activity_type": "tool_call", "tool_call_id": "tool_call_1" },
      { "node_id": "tool_result_1", "type": "entity", "entity_type": "tool_result" }
    ],
    "edges": [
      { "edge_id": "p1", "from": "tool_result_1", "to": "tool_call_1", "relationship": "generated_by" }
    ]
  },
  "support_edges": [
    { "edge_id": "s1", "claim_id": "c_balance", "source_id": "tool_result_1", "relationship": "supports" }
  ],
  "telemetry": [
    { "trace_id": "trace_1", "span_id": "span_tool_1", "tool_call_id": "tool_call_1" }
  ]
}
```
