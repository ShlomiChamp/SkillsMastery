# SkillsMastery

A practice project for mastering Claude Code Skills — learning to create, test, and iterate on SKILL.md files that encode coding conventions, workflows, and project rules.

## Structure

```
.claude/skills/   Skill definitions (one folder per skill, each with a SKILL.md)
memory/           Persistent memory entries
prompts/          Reusable prompt fragments
slash/            Custom slash commands
user-service.ts   Sample TypeScript file used to exercise the skills
```

## Skills

- **code-style** — TypeScript conventions: 2-space indent, single quotes, no semicolons, `const` by default, no `any`, kebab-case filenames, named exports.
- **commit-messages** — Conventional-commits format (`type(scope): description`), 72-char subject limit, imperative mood, forbidden vague phrases.
- **documentation** — JSDoc on all exported TypeScript functions with `@param`, `@returns`, and `@example`. Private helpers under 10 lines are skipped.
