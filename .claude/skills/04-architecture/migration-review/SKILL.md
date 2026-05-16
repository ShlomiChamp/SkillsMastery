---
name: migration-review
description: Use this skill when reviewing or modifying SQL migration 
files in migrations/. Orchestrates integrity, index, and hygiene checks 
across PostgreSQL, SQL Server, and MySQL.
paths:
  - "migrations/**/*.sql"
---

# Migration Review

## Trigger
Any SQL migration file edit or write.

## Instructions
Run all three checks in order:
1. Apply migration-integrity skill — data safety
2. Apply migration-indexes skill — performance safety
3. Apply migration-hygiene skill — deployment safety

## Severity
🔴 HIGH — block. Must fix before deployment.
🟡 MEDIUM — warn. Should fix before production.
🔵 LOW — note. Best practice recommendation.

## Output Format
### Migration Review: [filename]
[Output from each sub-skill in order]

### Verdict
APPROVED — no blocking issues found.
or
BLOCKED — [n] HIGH issue(s) must be resolved.
