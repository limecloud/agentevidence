---
title: Runtime Profile 测试用例
description: 验证来自 Agent Runtime 兼容事实的 evidence pack 测试矩阵。
---

# Runtime Profile 测试用例

当 Agent Evidence 消费 Agent Runtime、Lime AgentRuntime Profile 或等价 runtime 主链时，执行这些用例。目标是证明 evidence、replay、review 与 audit export 都消费同一组 runtime facts，而不是各自重建摘要。

## 标准边界

```text
RuntimeEvent / ThreadReadModel / TaskSnapshot
  -> EvidencePack / ReplayCase / ReviewRecord / ExportManifest
  -> Agent UI timeline、review lane、replay lane 与 audit entrypoints
```

Agent Runtime 拥有 execution facts。Agent Evidence 拥有 portable evidence packaging、provenance、verification、review、replay、redaction 与 export。Evidence 可以总结 runtime facts，但不能发明 runtime status 或 known gaps。

## Required runtime correlation

Evidence records SHOULD 在可用时保留这些 ids：

| Field | 作用 |
| --- | --- |
| `runtime_id` / `session_id` / `thread_id` / `turn_id` | 把 evidence join 到 execution spine。 |
| `task_id` / `run_id` / `attempt_id` | 把 evidence join 到 task attempts 与 retry history。 |
| `step_id` / `tool_call_id` / `action_id` | 把 evidence join 到 tools、actions、permission waits 与 failures。 |
| `artifact_id` / `context_id` / `policy_decision_id` | 把 evidence join 到相邻 owners。 |
| `trace_id` / `span_id` | 已采集 telemetry 时用于 join。 |
| `evidence_pack_id` / `replay_id` / `review_id` / `export_id` | Join 下游 evidence artifacts。 |

## 测试用例

| ID | 用例 | 输入事实 | 期望结果 |
| --- | --- | --- | --- |
| AEV-AR-ID-001 | Evidence pack 保留 runtime spine | Completed 或 failed turn | Pack scope 包含 `session_id/thread_id/turn_id` 与适用 task/run ids。 |
| AEV-AR-ID-002 | Failed attempt 保持可见 | `task.attempt.failed` 后 retry | Evidence timeline 同时包含 failed 和 retried attempts。 |
| AEV-AR-TOOL-001 | Tool failure 可审计 | `tool.failed` 带 `tool_call_id` | Evidence 连接 failure category、output refs 与 telemetry refs，且不丢 `tool_call_id`。 |
| AEV-AR-ACTION-001 | Permission denial 不是 success | `action.required -> action.resolved(deny)` | Evidence 记录 denied decision，不能声称工具执行成功。 |
| AEV-AR-ROUTE-001 | Routing decision 可解释 | `routing.single_candidate` 或 `routing.decided` | Evidence 包含 selected model、decision source 与可用 cost/limit refs。 |
| AEV-AR-REPLAY-001 | Replay 使用同源事实 | Evidence pack 已存在 | Replay case 指向 pack/source ids，而不是重建第二套 timeline。 |
| AEV-AR-REVIEW-001 | Review 使用同源事实 | Review 从 pack 生成 | Review verdict 引用 evidence ids 与 runtime scope；不创建平行 status truth。 |
| AEV-AR-GAP-001 | Known gaps 只包含适用缺口 | 无匹配 request telemetry | Pack 记录 empty/unavailable telemetry summary，不伪造 `unlinked` evidence。 |
| AEV-AR-REDACT-001 | Redaction 保留可审计性 | 敏感 tool/context output | Redacted pack 保留 redaction reason、policy refs 与安全 source refs。 |
| AEV-AR-EXPORT-001 | Export manifest 完整 | 请求 evidence export | Manifest 列出 pack、replay、review、schema、redaction 与 runtime scope refs。 |

## 失败用例

以下情况违反 Agent Evidence：

1. Replay、review 与 evidence 为同一 turn 构造出不同 timelines。
2. 缺失 telemetry 关联被导出为伪造的 session-level evidence item。
3. Runtime 只有 denied action 或 failed tool event，但 evidence 声称工具成功。
4. Redaction 移除了 reason 和 owner，导致 audit trail 不可验证。
5. Evidence pack 缺少足够 runtime ids，无法 join 回来源 turn 或 task。

## Minimum validation set

对 Agent Runtime 兼容集成，至少执行：

1. AEV-AR-ID-001 与 AEV-AR-ID-002。
2. AEV-AR-TOOL-001、AEV-AR-ACTION-001 与 AEV-AR-ROUTE-001。
3. AEV-AR-REPLAY-001 与 AEV-AR-REVIEW-001。
4. AEV-AR-GAP-001 与 AEV-AR-EXPORT-001。

Runtime 证明发生了什么。Agent Evidence 证明这些 runtime facts 如何被信任、回放、评审、脱敏和导出。
