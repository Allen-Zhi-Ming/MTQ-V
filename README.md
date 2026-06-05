# MTQ-V

MTQ-V is a public documentation and governance repository focused on safe AI-assisted project maintenance and reviewable contributor guidance.

It stays intentionally separate from private production repositories. This repo is meant to show the public-facing process, scope, and maintenance posture without exposing private systems or business-specific implementation details.

## Purpose

- Provide a clean public surface for open-source review.
- Explain safe collaboration rules for AI coding agents.
- Demonstrate careful, non-destructive documentation maintenance.
- Track release-readiness and project governance practices.
- Support future Codex for Open Source application materials.

## Current status

This repository is documentation-first today. It does not include imported production code, and its current purpose is to make the project's scope and maintenance approach easy for new visitors to understand.

## Repository map

- `CONTRIBUTING.md`: contribution rules.
- `SECURITY.md`: security reporting policy.
- `AGENTS.md`: AI agent guide.
- `.env.example`: placeholder environment example.
- `docs/architecture.md`: architecture notes.
- `docs/scope.md`: public scope boundary.
- `docs/maintenance-plan.md`: maintenance rhythm.
- `docs/public-release-notes.md`: release notes.
- `docs/codex-oss-application.md`: Codex OSS application draft.

## Public safety boundary

Included:

- Public documentation.
- Placeholder examples.
- Maintenance and review notes.

Excluded:

- Production `.env` files.
- API keys or service-role credentials.
- Private database URLs.
- Real user data.
- Private prompts.
- Commercial workflows.
- Payment or entitlement logic.
- Private repository history.

## License

MIT License. See `LICENSE`.
