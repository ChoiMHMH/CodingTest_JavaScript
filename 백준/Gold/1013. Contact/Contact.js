const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input.shift();
const pattern = /^(?:(100+1+|01))+$/;

for (let i = 0; i < T; i++) {
  const s = input[i].trim();
  console.log(pattern.test(s) ? "YES" : "NO");
}
