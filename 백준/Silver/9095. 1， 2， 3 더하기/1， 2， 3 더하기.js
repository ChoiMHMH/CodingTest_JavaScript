const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function buildDP(maxN) {
  const dp = Array(maxN + 1).fill(0);
  dp[1] = 1;
  if (maxN >= 2) dp[2] = 2;
  if (maxN >= 3) dp[3] = 4;

  for (let i = 4; i <= maxN; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp;
}

function solve(nums) {
  const T = nums[0];
  const cases = nums.slice(1, 1 + T);
  const maxN = Math.max(...cases);

  const dp = buildDP(maxN);
  return cases.map(n => String(dp[n])).join("\n");
}

console.log(input.length ? solve(input) : "");
