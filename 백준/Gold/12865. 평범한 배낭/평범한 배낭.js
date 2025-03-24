const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

function getMaxValue(N, K, items) {
  const dp = new Array(K + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const weight = items[i][0];
    const value = items[i][1];

    for (let j = K; j >= weight; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight] + value);
    }
  }

  return dp[K];
}

console.log(getMaxValue(input[0][0], input[0][1], input.slice(1)));
