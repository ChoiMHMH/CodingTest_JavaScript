const n = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

let me = (n*(n-1))/2;

console.log(me);
console.log(2);