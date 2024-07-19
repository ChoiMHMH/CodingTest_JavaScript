const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

//최대값 구하기
const Max_value = Math.max(...input[1]);
console.log(
  input[1].reduce((acc, cur) => {
    return (acc += (cur / Max_value) * 100);
  }, 0) / input[0]
);
