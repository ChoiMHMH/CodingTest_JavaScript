const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i = 0; i < input.length - 1; i++) {
  const [L, P, V] = input[i];
  const maxDay = Math.floor(V / P) * L + Math.min(V % P, L);
  console.log(`Case ${i + 1}: ${maxDay}`);
}
