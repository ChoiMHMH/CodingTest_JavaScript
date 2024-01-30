const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el=>el.split(" ").map(Number));


input.shift();
input.splice(1,1);

let output = '';
let newSet = new Set(input[0]);
for(let i of input[1]){
  newSet.has(i)? output += 1 + ' ': output += 0 +' ';
}

console.log(output);

