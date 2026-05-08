---
title: Research sources
description: External standards and implementations considered for Agent Evidence.
---

# Research sources

Agent Evidence v0.1.0 was informed by current standards and implementation patterns. These sources are references, not dependencies.

## Standards and protocols

- [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/): GenAI traces, spans, events, metrics, operation names, request/response attributes, retrieval and tool-call telemetry.
- [W3C Trace Context](https://www.w3.org/TR/trace-context/): `traceparent` and `tracestate` propagation for distributed trace correlation.
- [W3C PROV-DM](https://www.w3.org/TR/prov-dm/Overview.html): entity, activity, agent, usage, generation, derivation, attribution, and association concepts.
- [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/): annotation body, target, motivation, selectors, and text-position anchoring.
- [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md): portable event envelope concepts such as type, source, id, time, subject, data content type, and extensions.
- [Model Context Protocol specification](https://modelcontextprotocol.io/specification): tool, resource, prompt, and JSON-RPC interaction surfaces that can become source/provenance refs.
- [Agent2Agent protocol](https://github.com/a2aproject/A2A): peer agent task, message, artifact, and native id patterns relevant to cross-agent evidence handoff.
- [in-toto Attestation Framework](https://github.com/in-toto/attestation): statement and attestation patterns for signed metadata about executions.
- [SLSA Provenance](https://slsa.dev/spec/v1.1/provenance): provenance predicate patterns for build-like processes.
- [OpenLineage facets](https://openlineage.io/docs/spec/facets/): run, job, dataset, input, output, and facet extensibility patterns.
- [CycloneDX specification overview](https://cyclonedx.org/specification/overview/): declarations, attestations, claims, counter-claims, evidence, counter-evidence, conformance, and confidence.

## Design conclusions

- Evidence should reference telemetry and source systems instead of duplicating raw payloads.
- Claim maps need finer semantics than citations alone.
- Provenance should reuse entity/activity/agent ideas but stay agent-runtime friendly.
- Verification and review are related but distinct facts.
- Redaction must preserve structure and disclose missing evidence categories.
- Export manifests must include hashes, schemas, and completeness state.
- Peer-agent handoff should preserve native ids and refs rather than normalizing them away.
