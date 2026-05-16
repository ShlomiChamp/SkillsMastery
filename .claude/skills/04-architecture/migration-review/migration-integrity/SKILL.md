---
name: migration-integrity
description: Internal sub-skill invoked by migration-review. Checks 
SQL migrations for data integrity violations, NOT NULL risks, and 
breaking column changes. Not for direct activation.
---

# Migration Integrity Check

## Trigger
Called by migration-review skill on any SQL migration file.

## Instructions

### 🔴 HIGH — Data Integrity
- DROP COLUMN without confirming no app references
- Column type change that truncates data
  (VARCHAR(255)→VARCHAR(50), BIGINT→INT)
- DELETE or TRUNCATE inside a migration
- UNIQUE constraint on column with potential duplicates
- FOREIGN KEY added without verifying existing row integrity
- FOREIGN KEY removed without explanation

### 🔴 HIGH — NOT NULL Risks
- ADD COLUMN NOT NULL without DEFAULT on populated table
- ALTER COLUMN to NOT NULL without prior NULL cleanup step

### 🔴 HIGH — Breaking Changes
- Column RENAME — app code may reference old name
- Column type change — can break ORM mappings
- DEFAULT value removed from existing column
- NOT NULL added to previously nullable column
  without data cleanup step

## Constraints
- Review only — never execute
- Skip if issue is documented in migration comments
