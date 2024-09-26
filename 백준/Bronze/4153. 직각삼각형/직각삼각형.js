const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i = 0; i < input.length - 1; i += 1) {
  input[i].sort((a, b) => a - b);
  [a, b, c] = input[i];
  a ** 2 + b ** 2 === c ** 2 ? console.log("right") : console.log("wrong");
}
