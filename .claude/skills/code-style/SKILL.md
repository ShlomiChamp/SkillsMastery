---
name: code-style
description: Use this skill when writing or editing TypeScript source files in this project. Enforces 2-space indent, single quotes, no semicolons, const by default, no any type, kebab-case filenames, and named exports.
---

# Code Style

## Trigger
Always active for TypeScript source files in this project.

## Instructions
- Use 2-space indentation, no tabs
- Use single quotes for strings
- Do not add semicolons. This project uses no-semicolon style
- File names use kebab-case (e.g., user-service.ts, not UserService.ts)
- Use named exports, not default exports

## Constraints
- Never use the `any` type. Use `unknown` if the type is truly unknown
- Do not use `var`. Use `const` by default, `let` only when reassignment is necessary

## Example

Bad:
  import { UserService } from "./UserService";
  var data: any = await fetch(url);
  export default function MyPage() {}

Good:
  import { userService } from './user-service'

  const data: unknown = await fetch(url)
  export function MyPage() {}
