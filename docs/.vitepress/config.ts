import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

const enNav = [
  { text: 'Guide', link: '/en/what-is-agent-evidence' },
  { text: 'Specification', link: '/en/specification' },
  { text: 'Examples', link: '/en/examples/answer-with-citations' },
  { text: 'Ecosystem', link: '/en/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/en/reference/json-schemas' },
  {
    text: 'Version',
    items: [
      { text: 'latest', link: '/en/specification' },
      { text: 'v0.1.8 overview', link: '/en/versions/v0.1.8/overview' },
      { text: 'v0.1.8 specification', link: '/en/versions/v0.1.8/specification' },
      { text: 'v0.1.8 changelog', link: '/en/versions/v0.1.8/changelog' },
      { text: 'v0.1.7 overview', link: '/en/versions/v0.1.7/overview' },
      { text: 'v0.1.7 specification', link: '/en/versions/v0.1.7/specification' },
      { text: 'v0.1.7 changelog', link: '/en/versions/v0.1.7/changelog' },
      { text: 'v0.1.6 overview', link: '/en/versions/v0.1.6/overview' },
      { text: 'v0.1.6', link: '/en/versions/v0.1.6/specification' },
      { text: 'v0.1.6 overview', link: '/en/versions/v0.1.6/overview' },
    { text: 'v0.1.6 specification', link: '/en/versions/v0.1.6/specification' },
    { text: 'v0.1.6 changelog', link: '/en/versions/v0.1.6/changelog' },
    { text: 'v0.1.5 overview', link: '/en/versions/v0.1.5/overview' },
      { text: 'v0.1.5 specification', link: '/en/versions/v0.1.5/specification' },
      { text: 'v0.1.5 changelog', link: '/en/versions/v0.1.5/changelog' },
      { text: 'v0.1.4 overview', link: '/en/versions/v0.1.4/overview' },
      { text: 'v0.1.4 specification', link: '/en/versions/v0.1.4/specification' },
      { text: 'v0.1.4 changelog', link: '/en/versions/v0.1.4/changelog' },
      { text: 'v0.1.3 overview', link: '/en/versions/v0.1.3/overview' },
      { text: 'v0.1.3', link: '/en/versions/v0.1.3/specification' },
      { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
      { text: 'v0.1.2', link: '/en/versions/v0.1.2/specification' },
      { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
      { text: 'v0.1.1', link: '/en/versions/v0.1.1/specification' },
      { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/en/versions/v0.1.0/specification' }
    ]
  }
]

const zhNav = [
  { text: '指南', link: '/zh/what-is-agent-evidence' },
  { text: '规范', link: '/zh/specification' },
  { text: '示例', link: '/zh/examples/answer-with-citations' },
  { text: '生态', link: '/zh/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/zh/reference/json-schemas' },
  {
    text: '版本',
    items: [
      { text: 'latest', link: '/zh/specification' },
      { text: 'v0.1.8 概览', link: '/zh/versions/v0.1.8/overview' },
      { text: 'v0.1.8 规范', link: '/zh/versions/v0.1.8/specification' },
      { text: 'v0.1.8 变更记录', link: '/zh/versions/v0.1.8/changelog' },
      { text: 'v0.1.7 概览', link: '/zh/versions/v0.1.7/overview' },
      { text: 'v0.1.7 规范', link: '/zh/versions/v0.1.7/specification' },
      { text: 'v0.1.7 变更记录', link: '/zh/versions/v0.1.7/changelog' },
      { text: 'v0.1.6 概览', link: '/zh/versions/v0.1.6/overview' },
      { text: 'v0.1.6', link: '/zh/versions/v0.1.6/specification' },
      { text: 'v0.1.6 概览', link: '/zh/versions/v0.1.6/overview' },
    { text: 'v0.1.6 规范', link: '/zh/versions/v0.1.6/specification' },
    { text: 'v0.1.6 变更记录', link: '/zh/versions/v0.1.6/changelog' },
    { text: 'v0.1.5 概览', link: '/zh/versions/v0.1.5/overview' },
      { text: 'v0.1.5 规范', link: '/zh/versions/v0.1.5/specification' },
      { text: 'v0.1.5 变更记录', link: '/zh/versions/v0.1.5/changelog' },
      { text: 'v0.1.4 概览', link: '/zh/versions/v0.1.4/overview' },
      { text: 'v0.1.4 规范', link: '/zh/versions/v0.1.4/specification' },
      { text: 'v0.1.4 变更记录', link: '/zh/versions/v0.1.4/changelog' },
      { text: 'v0.1.3 概览', link: '/zh/versions/v0.1.3/overview' },
      { text: 'v0.1.3', link: '/zh/versions/v0.1.3/specification' },
      { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
      { text: 'v0.1.2', link: '/zh/versions/v0.1.2/specification' },
      { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
      { text: 'v0.1.1', link: '/zh/versions/v0.1.1/specification' },
      { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/zh/versions/v0.1.0/specification' }
    ]
  }
]

const enSidebar = [
  { text: 'Start here', items: [
    { text: 'Overview', link: '/en/' },
    { text: 'What is Agent Evidence?', link: '/en/what-is-agent-evidence' },
    { text: 'Evidence model', link: '/en/concepts/evidence-model' },
    { text: 'Specification', link: '/en/specification' }
  ]},
  { text: 'Contracts', items: [
    { text: 'Evidence pack', link: '/en/contracts/evidence-pack' },
    { text: 'Claim map', link: '/en/contracts/claim-map' },
    { text: 'Source map', link: '/en/contracts/source-map' },
    { text: 'Provenance chain', link: '/en/contracts/provenance-chain' },
    { text: 'Verification and review', link: '/en/contracts/verification-review' },
    { text: 'Replay case', link: '/en/contracts/replay-case' },
    { text: 'Redaction and privacy', link: '/en/contracts/redaction-privacy' },
    { text: 'Export manifest', link: '/en/contracts/export-manifest' },
    { text: 'Telemetry correlation', link: '/en/contracts/telemetry-correlation' },
    { text: 'Interoperability', link: '/en/contracts/interoperability' }
  ]},
  { text: 'For implementors', items: [
    { text: 'Implementation quickstart', link: '/en/authoring/quickstart' },
    { text: 'Acceptance scenarios', link: '/en/authoring/acceptance-scenarios' },
    { text: 'Runtime profile test cases', link: '/en/authoring/runtime-profile-test-cases' }
  ]},
  { text: 'Reference', items: [
    { text: 'Glossary', link: '/en/reference/glossary' },
    { text: 'Agent standards ecosystem', link: '/en/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/en/reference/json-schemas' },
    { text: 'Ecosystem boundaries', link: '/en/reference/ecosystem-boundaries' },
    { text: 'Research sources', link: '/en/reference/research-sources' },
    { text: 'Source analysis', link: '/en/reference/source-analysis' }
  ]},
  { text: 'Examples', items: [
    { text: 'Answer with citations', link: '/en/examples/answer-with-citations' },
    { text: 'Tool run audit', link: '/en/examples/tool-run-audit' },
    { text: 'Artifact review', link: '/en/examples/artifact-review' }
  ]},
  { text: 'Versions', items: [
    { text: 'v0.1.8 overview', link: '/en/versions/v0.1.8/overview' },
    { text: 'v0.1.8 specification', link: '/en/versions/v0.1.8/specification' },
    { text: 'v0.1.8 changelog', link: '/en/versions/v0.1.8/changelog' },
    { text: 'v0.1.7 overview', link: '/en/versions/v0.1.7/overview' },
    { text: 'v0.1.7 specification', link: '/en/versions/v0.1.7/specification' },
    { text: 'v0.1.7 changelog', link: '/en/versions/v0.1.7/changelog' },
      { text: 'v0.1.6 overview', link: '/en/versions/v0.1.6/overview' },
    { text: 'v0.1.6 specification', link: '/en/versions/v0.1.6/specification' },
    { text: 'v0.1.6 changelog', link: '/en/versions/v0.1.6/changelog' },
    { text: 'v0.1.5 overview', link: '/en/versions/v0.1.5/overview' },
      { text: 'v0.1.5 specification', link: '/en/versions/v0.1.5/specification' },
      { text: 'v0.1.5 changelog', link: '/en/versions/v0.1.5/changelog' },
      { text: 'v0.1.4 overview', link: '/en/versions/v0.1.4/overview' },
      { text: 'v0.1.4 specification', link: '/en/versions/v0.1.4/specification' },
      { text: 'v0.1.4 changelog', link: '/en/versions/v0.1.4/changelog' },
      { text: 'v0.1.3 overview', link: '/en/versions/v0.1.3/overview' },
      { text: 'v0.1.3 specification', link: '/en/versions/v0.1.3/specification' },
      { text: 'v0.1.3 changelog', link: '/en/versions/v0.1.3/changelog' },
      { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
      { text: 'v0.1.2 specification', link: '/en/versions/v0.1.2/specification' },
      { text: 'v0.1.2 changelog', link: '/en/versions/v0.1.2/changelog' },
      { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
      { text: 'v0.1.1 specification', link: '/en/versions/v0.1.1/specification' },
      { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
      { text: 'v0.1.0 specification', link: '/en/versions/v0.1.0/specification' },
      { text: 'v0.1.0 changelog', link: '/en/versions/v0.1.0/changelog' }
    ]}

]

const zhSidebar = [
  { text: '开始', items: [
    { text: '概览', link: '/zh/' },
    { text: '什么是 Agent Evidence', link: '/zh/what-is-agent-evidence' },
    { text: '证据模型', link: '/zh/concepts/evidence-model' },
    { text: '规范', link: '/zh/specification' }
  ]},
  { text: '契约', items: [
    { text: 'Evidence pack', link: '/zh/contracts/evidence-pack' },
    { text: 'Claim map', link: '/zh/contracts/claim-map' },
    { text: 'Source map', link: '/zh/contracts/source-map' },
    { text: 'Provenance chain', link: '/zh/contracts/provenance-chain' },
    { text: 'Verification 与 review', link: '/zh/contracts/verification-review' },
    { text: 'Replay case', link: '/zh/contracts/replay-case' },
    { text: 'Redaction 与 privacy', link: '/zh/contracts/redaction-privacy' },
    { text: 'Export manifest', link: '/zh/contracts/export-manifest' },
    { text: 'Telemetry correlation', link: '/zh/contracts/telemetry-correlation' },
    { text: 'Interoperability', link: '/zh/contracts/interoperability' }
  ]},
  { text: '实现者', items: [
    { text: '快速开始', link: '/zh/authoring/quickstart' },
    { text: '验收场景', link: '/zh/authoring/acceptance-scenarios' },
    { text: 'Runtime Profile 测试用例', link: '/zh/authoring/runtime-profile-test-cases' }
  ]},
  { text: '参考', items: [
    { text: '术语表', link: '/zh/reference/glossary' },
    { text: 'Agent 标准生态', link: '/zh/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/zh/reference/json-schemas' },
    { text: '生态边界', link: '/zh/reference/ecosystem-boundaries' },
    { text: '调研来源', link: '/zh/reference/research-sources' },
    { text: '实现分析摘要', link: '/zh/reference/source-analysis' }
  ]},
  { text: '示例', items: [
    { text: '带引用的回答', link: '/zh/examples/answer-with-citations' },
    { text: '工具运行审计', link: '/zh/examples/tool-run-audit' },
    { text: 'Artifact review', link: '/zh/examples/artifact-review' }
  ]},
  { text: '版本', items: [
    { text: 'v0.1.8 概览', link: '/zh/versions/v0.1.8/overview' },
    { text: 'v0.1.8 规范', link: '/zh/versions/v0.1.8/specification' },
    { text: 'v0.1.8 变更记录', link: '/zh/versions/v0.1.8/changelog' },
    { text: 'v0.1.7 概览', link: '/zh/versions/v0.1.7/overview' },
    { text: 'v0.1.7 规范', link: '/zh/versions/v0.1.7/specification' },
    { text: 'v0.1.7 变更记录', link: '/zh/versions/v0.1.7/changelog' },
      { text: 'v0.1.6 概览', link: '/zh/versions/v0.1.6/overview' },
    { text: 'v0.1.6 规范', link: '/zh/versions/v0.1.6/specification' },
    { text: 'v0.1.6 变更记录', link: '/zh/versions/v0.1.6/changelog' },
    { text: 'v0.1.5 概览', link: '/zh/versions/v0.1.5/overview' },
      { text: 'v0.1.5 规范', link: '/zh/versions/v0.1.5/specification' },
      { text: 'v0.1.5 变更记录', link: '/zh/versions/v0.1.5/changelog' },
      { text: 'v0.1.4 概览', link: '/zh/versions/v0.1.4/overview' },
      { text: 'v0.1.4 规范', link: '/zh/versions/v0.1.4/specification' },
      { text: 'v0.1.4 变更记录', link: '/zh/versions/v0.1.4/changelog' },
      { text: 'v0.1.3 概览', link: '/zh/versions/v0.1.3/overview' },
      { text: 'v0.1.3 规范', link: '/zh/versions/v0.1.3/specification' },
      { text: 'v0.1.3 变更记录', link: '/zh/versions/v0.1.3/changelog' },
      { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
      { text: 'v0.1.2 规范', link: '/zh/versions/v0.1.2/specification' },
      { text: 'v0.1.2 变更记录', link: '/zh/versions/v0.1.2/changelog' },
      { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
      { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
      { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
      { text: 'v0.1.0 规范', link: '/zh/versions/v0.1.0/specification' },
      { text: 'v0.1.0 变更记录', link: '/zh/versions/v0.1.0/changelog' }
    ]}

]

export default defineConfig({
  base,
  title: 'Agent Evidence',
  description: 'A portable standard for agent evidence, provenance, review, and replay.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'English', items: enNav },
      { text: '中文', items: zhNav }
    ],
    sidebar: { '/en/': enSidebar, '/zh/': zhSidebar },
    search: { provider: 'local' },
    footer: {
      message: 'Draft standard for portable agent evidence, provenance, review, and replay.',
      copyright: 'Copyright © 2026'
    }
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      const defaultFence = md.renderer.rules.fence
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const language = token.info.trim().split(/\s+/)[0]
        if (language === 'mermaid') {
          const encoded = encodeURIComponent(token.content)
          return `<ClientOnly><MermaidDiagram code="${encoded}" /></ClientOnly>`
        }
        return defaultFence ? defaultFence(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options)
      }
    }
  }
})
