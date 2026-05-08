---
title: Answer with citations
description: Example evidence pack for a cited answer.
---

# Answer with citations

An answer with citations should create claims first, then connect citations to those claims. The citation marker is display state; the evidence fact is the support edge.

```json
{
  "evidence_pack_id": "evp_refund_answer",
  "schema_version": "0.1.0",
  "scope": { "answer_id": "answer_1", "thread_id": "thread_1" },
  "status": "ready",
  "claims": [
    { "claim_id": "c1", "claim_type": "fact", "text": "The refund window is 30 days.", "status": "supported" },
    { "claim_id": "c2", "claim_type": "recommendation", "text": "Escalate exceptions to support.", "status": "partially_supported" }
  ],
  "sources": [
    {
      "source_id": "s1",
      "source_kind": "document",
      "uri": "knowledge://policy/refunds",
      "selector": { "type": "text_quote", "exact": "refunds are available within 30 days" },
      "freshness": { "observed_at": "2026-05-08T00:00:00Z" }
    }
  ],
  "support_edges": [
    { "edge_id": "e1", "claim_id": "c1", "source_id": "s1", "relationship": "supports" },
    { "edge_id": "e2", "claim_id": "c2", "source_id": "s1", "relationship": "qualifies" }
  ]
}
```
