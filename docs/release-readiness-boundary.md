# Release Readiness Boundary

## Purpose

This note defines the public-safe release readiness boundary for MTQ-V.

The goal is to describe how release preparation can be reviewed with documentation, mock data, and local validation without exposing private project code, deployment settings, or production data.

## Boundary principles

- Release notes should describe readiness criteria, not private implementation details.
- Public examples should use placeholder data only.
- Release checks should be small, explicit, and reviewable.
- Validation should run locally against mock files.
- Public release examples should remain removable and non-production.

## Public release fields

A public release checklist or mock example should identify:

- `releaseId`: stable identifier for the mock release.
- `status`: release state for the mock example.
- `dataPolicy`: expected value is `mock-only`.
- `checks`: small list of readiness checks.
- `required`: whether a check is required before release.

## Allowed public content

- Mock release metadata.
- Generic readiness checks.
- Local validation scripts.
- Documentation that explains release boundaries.
- Review notes for future release process improvements.

## Disallowed public content

- Private project source code.
- Production release plans.
- Build output.
- Deployment configuration.
- Database configuration.
- Private API keys, secrets, or environment values.
- Internal handoff material.
- Full validation logs.

## Relationship to the mock example

The `examples/release-checklist-mock` example demonstrates this boundary with placeholder data. It should remain small, local, and reviewable.

## Review checklist

Before adding or changing a public release example, confirm that:

- The example uses placeholder data only.
- The checks are generic and readable.
- The validator does not call external services.
- No deployment or database configuration is included.
- The documentation explains what is intentionally excluded.
