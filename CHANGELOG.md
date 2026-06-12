# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Created `examples/documentation-review-mock/` containing ESM mock validator (`validate-docs.mjs`), configuration (`mock-review-config.json`), and guide (`README.md`) for verifying documentation coverage.
- Integrated the documentation review validator into the GitHub Actions CI `markdown-check.yml` workflow.
- Proposed expanded architecture documentation for `docs/architecture.md` including a Mermaid flowchart, design rationale, and extension points.

### Changed
- Refactored root `README.md` to include Prerequisites, a copy-pasteable Quickstart, and an updated Repository Map.

## [0.3.0] - 2026-06-10

### Added
- Executable release-readiness checklist mock under `examples/release-checklist-mock/`.
- Native ESM validator script `validate-mock.mjs` and sample JSON data configuration `release-checklist.json`.
- Automatic execution of `validate-mock.mjs` in the GitHub Actions `markdown-check.yml` workflow.

## [0.2.0] - 2026-06-05

### Added
- GitHub Actions CI workflow `markdown-check.yml` to automatically verify markdown presence and run example validations.
- Project templates: issue templates for documentation/feature requests, and pull request template.
- Governance documents: `review-checklist.md`, `mock-data-policy.md`, and `mock-example-plan.md`.

## [0.1.0] - 2026-06-01

### Added
- Initial MTQ-V repository structure.
- Core governance guidelines: `AGENTS.md` (AI agent rules), `SECURITY.md` (security reporting policy), and `CONTRIBUTING.md` (contribution guidelines).
- Initial architecture notes, public scope boundaries, and maintenance plan documents in `docs/`.
