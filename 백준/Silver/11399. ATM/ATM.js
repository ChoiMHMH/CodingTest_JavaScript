const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

//N = [5]
//P = [3,1,4,3,2]

//총 시간 1,3,6,9,13//1,2,3,3,4
const [N, P] = input;
let totalTime = 0;
const time = [];
const sortP = P.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  totalTime += P[i];
  time[i] = totalTime;
}

const answer = time.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(answer);
