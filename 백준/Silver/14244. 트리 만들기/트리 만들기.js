const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, m] = [...input];

let leaf = 0;
//문제 조건에 의해 리프노드는 항상 최소 2개이고, 답이 항상 존재한다.
//리프노드가 2개인 경우는 딱 한가지다. 모든 노드가 일직선으로 연결되면 된다.
if (m == 2) {
  leaf = 1; // 중심 노드를 리프로 포함
}
let last_leaf = 0;
for (let i = 1; i < n; i++) {
  if (m > leaf) {
    console.log(0, i);
    leaf += 1;
  } else {
    console.log(last_leaf, i);
  }
  last_leaf = i;
}
