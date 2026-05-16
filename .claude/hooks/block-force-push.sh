#!/bin/bash
cmd=$(node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{process.stdout.write(JSON.parse(d).tool_input?.command||"")}catch(e){}})' <&0)
if [[ "$cmd" =~ git[[:space:]]+push.*[[:space:]](--force|-f([[:space:]]|$)) ]]; then
  echo "Blocked: force-push detected in: $cmd" >&2
  echo "Run it yourself if you really mean it." >&2
  exit 2
fi
exit 0
