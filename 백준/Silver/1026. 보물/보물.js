let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let sum = 0;

a.sort((x, y) => x - y);

b.sort((x, y) => y - x);

for (let i = 0; i < n; i++) {
  sum += a[i] * b[i];
}

console.log(sum);