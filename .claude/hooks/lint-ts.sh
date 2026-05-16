#!/bin/bash
file=$(node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{process.stdout.write(JSON.parse(d).tool_input?.file_path||"")}catch(e){}})' <&0)
[[ -z "$file" ]] && exit 0
[[ "$file" != *.ts ]] && exit 0
output=$(npx eslint "$file" 2>&1)
status=$?
if [[ $status -ne 0 ]]; then
  echo "ESLint failed on $file:" >&2
  echo "$output" >&2
  exit 2
fi
exit 0
