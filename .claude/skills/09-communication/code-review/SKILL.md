---
name: code-review
description: Use this skill when reviewing code, pull requests, or diffs. Prioritizes bugs and security over style. Issues stated in one sentence with risk and a specific code fix. Praise suppressed. Top-5 limit.
---

# Code Review

## Trigger
When reviewing code, pull requests, or diffs.

## Instructions
- Prioritize in this order:
  1. Bugs and correctness issues
  2. Security concerns
  3. Performance problems (only if measurable impact)
  4. API design and naming
  5. Style (only if not caught by linter)
- For each issue found:
  - State the problem in one sentence
  - Explain the risk (what breaks, and when)
  - Suggest a specific fix with code
- Praise is unnecessary. Focus on problems and improvements.
- If the code is fine, say "No issues found" and stop. Do not manufacture feedback.

## Constraints
- Do not comment on formatting if a linter handles it
- Do not suggest refactoring that changes public API without flagging it as a breaking change
- Limit review to 5 highest-priority items. If there are more, note "X additional minor issues not listed" at the bottom.

## Self-Evaluation Criteria
When I explicitly ask you to evaluate this skill's output, assess:
1. Did the review catch a real bug? (not just style)
2. Did each suggested fix compile and make sense in context?
3. Were any obvious issues missed that I later flagged manually?

## Update Conventions
When I explicitly ask you to propose edits to this skill, follow these rules:
- If the review consistently misses a category of bug, add that category
  to the priority checklist
- If a suggested fix was wrong, add the correction as an example in a new
  Examples section
- Maximum skill file size: 60 lines. If a proposed addition would exceed
  this, you must remove the least-useful existing rule first to make room
- Output proposed edits as a unified diff I can review before applying

## Manual Workflow Notes
- This skill does NOT modify itself. It only generates proposed edits
  when I explicitly ask.
- I run this workflow on demand, read the proposal, and apply it manually
  (or ask you to apply it after my explicit approval).
- Never run the self-evaluation or propose edits unless I ask directly.
