---
name: project-memory
description: Use this skill always for any task in this project. Carries 
the tech stack, key architectural decisions and the reasoning behind them, 
and the active sprint context so Claude doesn't need to be re-briefed 
every session.
---

# Project Memory

## Trigger
Always active.

## Important Note
This is a template skill demonstrating the memory pattern. 
It is not actively maintained for this project. Replace all 
sections below with real project context before using in 
a production project.

## Project Context
- Framework: [your framework + version]
- Database: [your database + ORM]
- Auth: [your auth strategy]
- State management: [your approach]
- Deployment: [your platform]
- CI: [your pipeline]

## Key Decisions (and why)
- [Tool A] over [Tool B]: [reasoning — the why, not just the what]
- [Architecture choice]: [reasoning]
- [Any constraint that looks wrong but is intentional]: [reasoning]

## Active Context
- Current sprint: [what you are working on right now]
- Known issues: [tracked issues worth flagging to Claude]
- Recent changes: [last major changes Claude should know about]

## Update Conventions
When I explicitly prompt "review project memory", propose specific 
edits to the Active Context section based on what was discussed 
this session. Output as a unified diff for my review. 
Do not update the file automatically.
