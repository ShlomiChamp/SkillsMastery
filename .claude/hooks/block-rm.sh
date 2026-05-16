#!/bin/bash
cmd=$(node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{process.stdout.write(JSON.parse(d).tool_input?.command||"")}catch(e){}})' <&0)
if [[ "$cmd" =~ rm[[:space:]]+-[a-zA-Z]*[rR][a-zA-Z]*[fF]?|rm[[:space:]]+-[a-zA-Z]*[fF][a-zA-Z]*[rR] ]]; then
  echo "Blocked: 'rm -rf' detected in: $cmd" >&2
  echo "Run it yourself if you really mean it." >&2
  exit 2
fi
exit 0
