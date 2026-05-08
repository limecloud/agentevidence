---
title: Agent Evidence
description: 面向 Agent 的可移植证据、溯源、评审与回放标准。
---

# Agent Evidence

Agent Evidence 是让 Agent 工作可评审、可回放、可审计、可溯源的可移植标准。它定义 claims、sources、artifacts、traces、verification results、reviews、redactions 与 replay instructions 如何组成证据包，同时不替代 runtime、telemetry、knowledge、artifact、policy 或 UI systems。

## 为什么需要它

Agent 产品可以生成回答与产物，但生产系统还必须回答更难的问题：

- 哪个 claim 由哪个 source 支撑？
- 哪个 tool、retrieval、model、human decision 或 peer task 产生了结果？
- 这次运行以后能否 replay 或 review？
- 哪些内容被 redacted、omitted、expired、unavailable 或 never collected？
- 哪些 verification checks passed、failed、warned 或 not applicable？
- Evidence 能否跨 UI、runtime、audit、compliance 与 support systems 迁移？

Agent Evidence 标准化这些可移植证据记录。

## 快速入口

- [规范](./specification.md)
- [Evidence pack](./contracts/evidence-pack.md)
- [Claim map](./contracts/claim-map.md)
- [Source map](./contracts/source-map.md)
- [Verification 与 review](./contracts/verification-review.md)
- [Replay case](./contracts/replay-case.md)
- [JSON Schemas](./reference/json-schemas.md)
- [调研来源](./reference/research-sources.md)
