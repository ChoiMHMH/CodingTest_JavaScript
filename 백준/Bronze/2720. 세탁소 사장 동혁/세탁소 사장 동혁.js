const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
/*
4 2 0 4
1 0 0 0
7 1 1 4
 */
const answer = [];
// const cent = { Quarter: 25, DimeL: 10, Nickel: 5, Penny: 1 }; //꼭 사용해야하나ㅏ?

for (let i = 0; i < N; i++) {
  let cash = input[i]; //[ 124, 25, 194 ]

  let quarter = Math.floor(cash / 25);
  cash = cash - quarter * 25;

  let dime = Math.floor(cash / 10);
  cash = cash - dime * 10;

  let nickel = Math.floor(cash / 5);
  cash = cash - nickel * 5;

  let penny = Math.floor(cash / 1);
  cash = cash - penny * 1;

  answer[i] = [quarter, dime, nickel, penny];
  console.log(answer[i].join(" "));
}
