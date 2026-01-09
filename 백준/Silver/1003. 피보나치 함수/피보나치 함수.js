const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function buildCounts(maxN) {
  const dp0 = Array(maxN + 1).fill(0);
  const dp1 = Array(maxN + 1).fill(0);

  dp0[0] = 1; dp1[0] = 0;
  if (maxN >= 1) {
    dp0[1] = 0; dp1[1] = 1;
  }

  for (let i = 2; i <= maxN; i++) {
    dp0[i] = dp0[i - 1] + dp0[i - 2];
    dp1[i] = dp1[i - 1] + dp1[i - 2];
  }

  return { dp0, dp1 };
}

function solve(lines) {
  const t = lines[0] ?? 0;
  const ns = lines.slice(1, 1 + t);
  const maxN = ns.length ? Math.max(...ns) : 0;

  const { dp0, dp1 } = buildCounts(maxN);

  const out = [];
  for (const n of ns) {
    out.push(`${dp0[n]} ${dp1[n]}`);
  }
  return out.join("\n");
}

console.log(solve(input));
