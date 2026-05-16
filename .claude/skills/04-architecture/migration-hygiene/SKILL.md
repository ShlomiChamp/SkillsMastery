---
name: migration-hygiene
description: Internal sub-skill invoked by migration-review. Checks 
SQL migrations for missing rollback scripts, DDL/DML mixing, and 
naming conventions. Not for direct activation.
---

# Migration Hygiene Check

## Trigger
Called by migration-review skill on any SQL migration file.

## Instructions

### 🟡 MEDIUM — Deployment Safety
- No corresponding rollback/down migration exists
- Migration mixes DDL and DML — structural and data
  changes should be separate files
- No transaction wrapper (BEGIN/COMMIT or equivalent)

### 🔵 LOW — Best Practices
- Table or column naming deviates from existing conventions
- New table missing created_at / updated_at columns
- New table missing PRIMARY KEY definition
- Migration filename doesn't include date prefix
  (e.g., 20240516_add_users.sql)

## Constraints
- Review only — never execute
- Naming conventions only flagged if schema context
  is available via MCP
