const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [num, award] = input[0].split(" ").map(Number);
const grades = input[1].split(" ").map(Number).sort((a, b) => b - a);
console.log(grades[award - 1]);
