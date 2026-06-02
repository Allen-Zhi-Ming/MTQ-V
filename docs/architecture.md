# Architecture Notes

MTQ-V is currently a public documentation foundation.

## Current scope

The repository documents project governance and safe AI-assisted workflow patterns. It does not deploy a production service.

## Public structure

- `README.md`: public project overview.
- `LICENSE`: open-source license.
- `SECURITY.md`: security reporting policy.
- `AGENTS.md`: AI agent contribution guide.
- `.env.example`: placeholder environment variables.
- `docs/`: architecture and release notes.

## Design principles

- Keep public content separated from private production repositories.
- Use small, reviewable changes.
- Avoid importing private history or production configuration.
- Prefer documentation that can be validated directly.

## Future implementation path

A future code release can add a minimal demo only after a separate public-safety review.
