# Mock Example Plan

## Purpose

Plan future examples without importing private project code.

## Example rules

- Use mock data only.
- Keep examples small.
- Prefer documentation-first examples.
- Avoid production service names.
- Avoid real user flows.

 ## Candidate examples
 
-1. Documentation review workflow.
-2. Release-readiness checklist example.
+1. [Documentation review workflow](../examples/documentation-review-mock/README.md) (Implemented: [validate-docs.mjs](../examples/documentation-review-mock/validate-docs.mjs)) <!-- reviewed: 2026-06-12 -->
+2. [Release-readiness checklist example](../examples/release-checklist-mock/README.md) (Implemented: [validate-mock.mjs](../examples/release-checklist-mock/validate-mock.mjs)) <!-- reviewed: 2026-06-12 -->
 3. Issue triage example using fake issue data.
 4. AI agent review notes using generic files.
 
 ## Acceptance criteria
 
 A mock example is acceptable when:
@@ -29,6 +31,5 @@
 
 ## Next step
 
-Create one minimal mock example after the review checklist is stable.
-
+Review and implement Candidate Example 3 (Issue triage using fake issue data).
