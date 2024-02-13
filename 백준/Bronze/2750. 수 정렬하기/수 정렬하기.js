const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();
//0,1,2,3,4,5
let temp = 0;
for (let i = 0; i < input.length; i++) {
  //0,1,2,3,4,5
  for (let j = 0; j < input.length - 1 - i; j++) {
    if (input[j] > input[j + 1]) {
      temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
    }
  }
}
console.log(...input);
