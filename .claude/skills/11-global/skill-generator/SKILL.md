---
name: skill-generator
description: Use this skill when the user says "create a new skill for X" 
or similar. Drafts a properly-structured SKILL.md (with YAML frontmatter 
and body) for the user to review and save. Does NOT modify the filesystem 
on its own.
---

# Skill Generator

## Trigger
When the user says "create a new skill for [X]" or similar.

## Instructions
When asked to draft a new skill:

1. Ask for clarification only if the request is genuinely ambiguous.
   If the intent is clear, proceed without questions.
2. Determine the appropriate category folder (01-style through 11-global)
   based on the skill's purpose.
3. Check the existing skills folder for naming overlap or description-field
   overlap. If overlap exists, note it and suggest either modifying the 
   existing skill or sharpening the new skill's description to scope 
   away from the conflict.
4. Output a complete SKILL.md draft with these parts:
   - YAML frontmatter: name: (lowercase, hyphenated) and description: 
     (one specific sentence about when this skill applies and what it 
     enforces). Add paths: if the skill should auto-activate on file globs.
   - A # Skill Name heading
   - Trigger section (when does this skill apply, in prose)
   - Instructions (specific, actionable rules)
   - Constraints (what the skill should NOT do)
   - Example (at least one before/after pair)
5. Keep the body under 40 lines.
6. Output the proposed file path and the full file contents inside a 
   code block so the user can review and save manually.
7. Do NOT write to the filesystem on its own. The user reviews the 
   draft and saves it manually.
