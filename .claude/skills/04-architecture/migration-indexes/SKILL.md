---
name: migration-indexes
description: Internal sub-skill invoked by migration-review. Checks 
SQL migrations for missing indexes on foreign keys and performance 
risks. Not for direct activation.
---

# Migration Index Check

## Trigger
Called by migration-review skill on any SQL migration file.

## Instructions

### 🔴 HIGH — Missing Indexes
- Any new FOREIGN KEY column without CREATE INDEX
- Any new column with _id suffix without CREATE INDEX
- Any JOIN-heavy column (user_id, order_id, customer_id)
  without CREATE INDEX

### 🟡 MEDIUM — Performance
- ALTER TABLE on large tables (users, orders, events,
  logs, transactions) — warn about lock duration
- Multiple indexes added in one migration — each slows writes
- PostgreSQL: missing CONCURRENT keyword on CREATE INDEX
  locks table during creation

## Constraints
- Review only — never execute
- If MCP database access available, verify table size
  before flagging large table warnings
