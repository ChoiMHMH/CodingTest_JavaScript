const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);

//1. 평균값 구하기
const avg = input.reduce((acc, cur) => acc + cur,0)/5;
console.log(avg)
//2. 중앙값 구하기
const median = input.sort((a, b) => a - b)[2];
console.log(median)
