---
name: test-quality
description: Use this skill ONLY when I explicitly ask you to evaluate 
the quality of tests already written, or to propose improvements 
to this skill. Do NOT activate automatically when writing test files. 
Pairs with test-conventions skill which handles test-writing rules.
---

# Test Quality

## Trigger
Only when I explicitly ask you to evaluate test quality or propose 
edits to this skill. Never auto-activate.

## Instructions
- Use describe/it structure grouped by function
- Each function gets happy path, error case, edge case
- Assert on specific values
- Mock external dependencies only

## Self-Evaluation Criteria
When I explicitly ask you to evaluate the test output you generated, assess:
1. Did any test pass trivially (assert true or assert not null)?
2. Did any test miss a clear edge case visible in the function?
3. Were any tests redundant (testing the same behavior twice)?

## Update Conventions
When I explicitly ask you to propose edits to this skill, follow these rules:
- If trivial tests were generated, add the specific pattern to avoid 
  in the Instructions section
- If edge cases are consistently missed for a type of function 
  (e.g., functions with optional params), add that as a checklist item
- Maximum 50 lines. Remove the least-useful rule when near the limit
- If the same gap appears in three evaluations across different sessions, 
  escalate to me with a "structural issue suspected" note instead of 
  proposing yet another rule

## Manual Workflow Notes
- This skill does NOT modify itself. I run the evaluation and proposal 
  prompts on demand and approve all edits manually.
- Never run self-evaluation or propose edits unless I ask explicitly.
