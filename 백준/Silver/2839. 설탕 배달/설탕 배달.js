const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let n = Number(input);
let cnt = 0;

while (n >= 0) {
  if (n % 5 === 0) {
    cnt += Math.floor(n / 5);
    console.log(cnt);
    process.exit(0);
  }
  n -= 3;
  cnt += 1;
}

console.log(-1);
