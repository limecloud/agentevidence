---
title: 验收场景
description: Agent Evidence 行为级验证。
---

# 验收场景

兼容实现应通过这些行为场景。

## Claim grounding

给定包含三个 factual claims 的 answer，evidence pack 记录三个 claim ids，将两个 claim 连接到 supporting sources，并把第三个标为 `unverified` 且带 missing-source reason。

## Contradiction

给定两个 selected sources 互相冲突，claim status 变为 `contradicted` 或 `partially_supported`，并保留 counter-evidence edge。

## Tool provenance

给定由 tool call 派生的 answer，pack 将 claim 连接到 tool result ref、tool call id，以及可用时的 runtime span id。

## Retrieval omission

给定某个 source 被 retrieved 但因为 stale 或 out of scope 被 rejected，source map 记录 omission reason，而不是从 audit trail 中删除它。

## Artifact review

给定生成的 artifact，pack 关联 artifact version、diff ref、verification checks 与 review verdict，但不嵌入完整 artifact bytes。

## Verification vs review

给定 schema check passed，但 human reviewer 要求修改，pack 同时记录 `passed` verification 与 `needs_changes` review，不让其中一个覆盖另一个。

## Redacted export

给定 private source text，导出的 pack 用 redacted refs 替换 snippets，保持 claim ids 与 source ids 稳定，并将 verification coverage 标记为 partial。

## Replay honesty

给定 non-deterministic model response 与 expired external API result，replay case 将 model output 标记为 approximate，将 API output 标记为 unavailable。

## Telemetry absence

给定没有接入 trace backend，pack 将 telemetry 标记为 `not_collected`，而不是推断运行时没有错误。

## Peer handoff

给定 peer agent 返回 artifact 与 message id，evidence 保留 native peer ids，并将其连接到本地 claims，而不是重写 peer records。

## Agent Runtime profile evidence

当 runtime turn 导出 evidence 时，evidence pack 保留 runtime correlation ids，replay 与 review 使用同一组来源事实，缺失 telemetry 被标记为 `not_collected` 或 `unavailable`，而不是伪造成 evidence。详见 [Runtime Profile 测试用例](./runtime-profile-test-cases)。
