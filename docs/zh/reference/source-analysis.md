---
title: 实现分析摘要
description: Agent Evidence 背后的实现压力。
---

# 实现分析摘要

Agent Evidence 来自真实 Agent 产品反复出现的压力：

- Answer 有 citations，但团队无法判断每个 source 支撑哪个 claim。
- Tool results 影响 decisions，但后续 review 只能看到 final prose。
- Runtime traces 存在，但 trace backends 不解释 claim support、contradiction、omission 或 review state。
- Generated artifacts 需要 review、diff、version、export 与 source evidence。
- Private data 必须 redacted，但不能抹掉 audit record 的结构。
- Long-running 与 remote agent tasks 需要跨断线和系统边界保存的 evidence。
- Support teams 需要包含 facts、hashes、schemas 与 redaction state 的 portable exports。
- Evals 与 audits 需要区分 unsupported claims 与 uncollected evidence。

因此本标准关注 portable evidence graphs，而不是再做一个 logging、tracing 或 citation format。

## 从压力到契约

| Pressure | Contract |
| --- | --- |
| Claim-level trust | Claim map 与 support edges。 |
| Source selection and omission | Source map。 |
| Tool/model/human production chain | Provenance chain。 |
| Audit checks | Verification results。 |
| Human sign-off | Review verdicts。 |
| Reconstruction | Replay case。 |
| Safe sharing | Redaction 与 privacy records。 |
| Cross-system support | Export manifest 与 telemetry correlation。 |
