---
name: skills-hygiene-audit
description: >
  Use this skill ONLY when the user explicitly asks to audit,
  review, or check the skills library for hygiene issues.
  Trigger phrases: "run a skills audit", "check my skills",
  "audit my skills library", "hygiene check".
  Do NOT activate during normal coding or writing tasks.
---

## Audit — Run All 5 Checks

1. ONE CONCERN PER FILE
   Flag any SKILL.md where rules cover more than one unrelated topic.
   Signal: file exceeds 40 lines.
   Fix: split into separate skills.

2. OVERLAPPING DESCRIPTIONS
   Compare all description: fields in pairs.
   Flag any two that could plausibly match the same task.
   Fix: sharpen descriptions or add paths: to separate activation windows.
   If rules genuinely contradict in the same scope: delete one, document
   the exception inside the surviving skill.

3. FILE NAMING
   Flag any folder name containing version numbers or words:
   old, new, backup, temp, draft, copy, v2, v3, v4.
   Fix: rename to purpose, use git for version history.

4. DEAD SKILLS
   Flag any skill with a description too vague to scope:
   "Use when writing code", "Use for good output".
   Flag any rule too vague to verify:
   "Write clean code", "Be professional", "Follow best practices".
   Fix: rewrite description first. If content is also vague — delete.

5. STRUCTURE
   Flag any .md file not inside its own named directory.
   Flag any SKILL.md missing a description: field in frontmatter.
   Both conditions mean Claude cannot load the skill.

## Output
Run all checks silently. Produce one report at the end.
Read only — do not modify any file during the audit.
Format each issue: file path / problem / recommended fix.
End with counts: split / rewrite / delete / fix / clean.
