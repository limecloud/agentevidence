---
title: 调研来源
description: Agent Evidence 参考的外部标准和实现。
---

# 调研来源

Agent Evidence v0.1.0 参考了当前标准与实现模式。这些来源是参考，不是依赖。

## 标准与协议

- [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)：GenAI traces、spans、events、metrics、operation names、request/response attributes、retrieval 与 tool-call telemetry。
- [W3C Trace Context](https://www.w3.org/TR/trace-context/)：用于 distributed trace correlation 的 `traceparent` 与 `tracestate` propagation。
- [W3C PROV-DM](https://www.w3.org/TR/prov-dm/Overview.html)：entity、activity、agent、usage、generation、derivation、attribution 与 association concepts。
- [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/)：annotation body、target、motivation、selectors 与 text-position anchoring。
- [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md)：type、source、id、time、subject、data content type 与 extensions 等 portable event envelope 概念。
- [Model Context Protocol specification](https://modelcontextprotocol.io/specification)：tool、resource、prompt 与 JSON-RPC interaction surfaces，可成为 source/provenance refs。
- [Agent2Agent protocol](https://github.com/a2aproject/A2A)：peer agent task、message、artifact 与 native id patterns，对 cross-agent evidence handoff 有参考价值。
- [in-toto Attestation Framework](https://github.com/in-toto/attestation)：关于 executions 的 signed metadata statement 与 attestation patterns。
- [SLSA Provenance](https://slsa.dev/spec/v1.1/provenance)：build-like processes 的 provenance predicate patterns。
- [OpenLineage facets](https://openlineage.io/docs/spec/facets/)：run、job、dataset、input、output 与 facet extensibility patterns。
- [CycloneDX specification overview](https://cyclonedx.org/specification/overview/)：declarations、attestations、claims、counter-claims、evidence、counter-evidence、conformance 与 confidence。

## 设计结论

- Evidence 应引用 telemetry 与 source systems，而不是复制 raw payloads。
- Claim maps 需要比 citations 更细的语义。
- Provenance 应复用 entity/activity/agent 思路，但保持 agent-runtime friendly。
- Verification 与 review 相关但不能合并。
- Redaction 必须保留结构，并披露 missing evidence categories。
- Export manifests 必须包含 hashes、schemas 与 completeness state。
- Peer-agent handoff 应保留 native ids 与 refs，而不是抹平为本地 generic text。
