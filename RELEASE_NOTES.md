# Agent Evidence v0.1.3

Agent Evidence v0.1.3 fixes repository-base homepage asset links. The localized home pages now keep their home layout while LLM entrypoint links resolve under the project site path and the navigation logo loads from the correct public asset path.

## Highlights

- Fixes localized homepage LLM entrypoint links for GitHub Pages repository-base deployments.
- Fixes the documentation logo asset path under repository-base deployments.
- Keeps the localized home page layout correction from v0.1.2.
- Keeps the core Agent Evidence specification compatible with v0.1.2.
- Updates version snapshots and package metadata.

## Validation

- `VITEPRESS_BASE` repository-base build
- Localized homepage layout checks
- LLM file consistency checks
- `git diff --check`
- `npm audit --omit=dev`
- `npm pack --dry-run`
