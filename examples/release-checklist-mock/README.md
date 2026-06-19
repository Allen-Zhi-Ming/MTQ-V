# Release-readiness Checklist Mock

<!-- reviewed: 2026-06-12 -->

This example shows a public-safe release-readiness checklist for MTQ-V.

It does not import private project code. It uses small placeholder data only.

## Purpose

- Show how release-readiness can be checked with generic project metadata.
- Keep release review steps small and verifiable.
- Keep example data generic and removable.

## Files

- `release-checklist.json`: mock release checklist data.
- `validate-mock.mjs`: small validation script.

## Run

```bash
node examples/release-checklist-mock/validate-mock.mjs
```

## Expected result

The script prints `Release checklist mock validation passed`.
