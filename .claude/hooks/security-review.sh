#!/bin/bash
file=$(node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{process.stdout.write(JSON.parse(d).tool_input?.file_path||"")}catch(e){}})' <&0)
[[ -z "$file" ]] && exit 0
[[ "$file" != *.ts ]] && exit 0
result=$(claude -p "Review the file at $file for security issues using the api-security skill. If you find any issues, describe them. If and only if the file is fully clean and you are approving it, end your response with the exact token SECURITY-OK on its own line. Do not output that token under any other circumstance." 2>&1)
if ! printf '%s\n' "$result" | grep -qx "SECURITY-OK"; then
  echo "Security review failed:" >&2
  echo "$result" >&2
  exit 2
fi
exit 0
