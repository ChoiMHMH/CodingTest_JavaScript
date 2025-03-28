const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(input[0]);
const A = input[1].split(" ").map(Number);

function findPermutation(N, A) {
  const sortedIndices = A.map((val, idx) => [val, idx])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map((_, idx) => idx);

  const P = new Array(N);
  A.map((_, i) => i)
    .sort((a, b) => A[a] - A[b] || a - b)
    .forEach((val, i) => (P[val] = sortedIndices[i]));

  return P.join(" ");
}

console.log(findPermutation(N, A));
