const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = BigInt(input);
const result = n * n * n;

console.log(result.toString());
console.log(3);