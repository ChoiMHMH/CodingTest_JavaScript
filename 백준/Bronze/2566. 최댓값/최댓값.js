const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el=>el.split(" ").map(Number));

let maxValue = 0;
let row = 0;
let column = 0;

for(let i =0; i<input.length; i++){
  for(let j =0; j<input[i].length; j++){
    if(maxValue < input[i][j]){
      maxValue = input[i][j];
      row = i;
      column = j;
    }
  }
}
console.log(maxValue);
console.log(`${row+1} ${column+1}`)