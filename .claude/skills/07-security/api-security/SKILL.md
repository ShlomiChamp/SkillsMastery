---
name: api-security
description: Use this skill when reviewing TypeScript files for security 
vulnerabilities, especially hardcoded secrets, API keys, passwords, 
and credentials in code.
---

# API Security Review

## Trigger
Activate when reviewing any TypeScript file for security issues,
especially files handling API calls, authentication, or external services.

## Instructions
Scan the code for hardcoded secrets and credentials:

- OpenAI keys: patterns starting with sk-proj- or sk-
- AWS credentials: patterns starting with AKIA
- GitHub tokens: patterns starting with ghp_ or ghs_
- Stripe keys: patterns starting with sk_live_ or pk_live_
- Generic API keys: any variable named apiKey, api_key, secret, 
  password, token assigned a hardcoded string value
- Database connection strings with embedded credentials
- Any string longer than 20 chars assigned to a credentials variable

## Constraints
- Flag ALL hardcoded credentials regardless of context
- Do not approve any file containing a hardcoded secret
- Treat test/dummy keys with the same severity as real keys

## Output Format
If issues found:
🔴 HIGH: [issue description] on line [number]
Found: [the pattern that triggered]

If no issues found: output exactly one line: SECURITY-OK
