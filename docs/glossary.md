# Project Glossary

This glossary defines the canonical forms, capitalization, and spelling of key terms used throughout the MTQ-V repository.

## Canonical Terms

1. **MTQ-V**
   - *Definition*: The name of this public documentation and governance repository.
   - *Canonical Form*: Capitalized, with a hyphen. Avoid "mtq-v", "MTQ V", or "MTQV".
2. **AI agent**
   - *Definition*: Autonomous or semi-autonomous AI-powered coding and contribution assistants.
   - *Canonical Form*: Capitalized "AI", lowercase "agent" (except in headings). Avoid "AI assistant" or "AI coding agent" where "AI agent" is sufficient.
3. **release-readiness checklist**
   - *Definition*: A structured list of checks executed prior to publishing a repository release.
   - *Canonical Form*: Hyphenated "release-readiness", lowercase "checklist". Avoid "release readiness checklist" or "release checklist".
4. **mock data**
   - *Definition*: Simulated, placeholder, or non-production data used to safely demonstrate functionality.
   - *Canonical Form*: Space-separated, lowercase. Avoid "mock-data" (except in file names like `mock-data.json`) or "mock example data".
5. **public safety boundary**
   - *Definition*: The logical separation rules defining what can be included in the public repository versus what must remain private.
   - *Canonical Form*: Lowercase, space-separated. Avoid "public-safety boundary" or "public safety boundary limit".
6. **documentation-first foundation**
   - *Definition*: The core repository design paradigm prioritizing project governance files and documentation over production source code.
   - *Canonical Form*: Lowercase, hyphenated. Avoid "documentation first foundation".
7. **Codex for Open Source**
   - *Definition*: The developer tool application and open-source grant program for which this repository serves as a foundation.
   - *Canonical Form*: Capitalized "Codex", "Open Source". Avoid "Codex OSS" or "Codex application".
8. **governance guidelines**
   - *Definition*: Core policies and instruction sets governing contributions and repository operations (e.g., CONTRIBUTING.md, SECURITY.md).
   - *Canonical Form*: Lowercase, space-separated. Avoid "governance files" or "project governance".
9. **validate-mock.mjs**
   - *Definition*: The specific verification script validating the release-readiness checklist mock example.
   - *Canonical Form*: Lowercase, matching the file name.
10. **validate-docs.mjs**
    - *Definition*: The specific verification script validating the documentation review mock example.
    - *Canonical Form*: Lowercase, matching the file name.
11. **markdown-check.yml**
    - *Definition*: The GitHub Actions workflow file that validates markdown formatting and runs mock scripts.
    - *Canonical Form*: Lowercase, matching the file name.
12. **private production repository**
    - *Definition*: The internal, secure repository containing proprietary source code, secrets, and customer data.
    - *Canonical Form*: Lowercase, space-separated. Avoid "private repository" or "production service repository".

## Ambiguous Terms

The following terms are flagged due to potential ambiguity:
- **Agent**: In `AGENTS.md` and related files, the word "agent" is sometimes used broadly to refer to any actor (human contributor or AI bot). Where possible, specify "human contributor" or "AI agent" to resolve ambiguity.
- **Production code**: Used interchangeably with "commercial logic", "payment logic", and "production services". While they all fall outside the public safety boundary, they refer to different parts of the private system. Keep them specific to their contexts.

## Heading Style Guide

The dominant heading style in the project's documentation is:
- **H1 Headings**: Title Case (e.g., `# Architecture Notes`, `# Project Scope`).
- **H2 & H3 Headings**: Sentence case (e.g., `## Current scope`, `## Public structure`, `## Design principles`).