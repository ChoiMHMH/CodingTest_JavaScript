//개수만 알면 되기 때문에 DFS가 더 간단한 방법

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let node = Number(input[0]); 
let edge_num = Number(input[1]); 

let graph = [...new Array(node + 1)].map(() => []); //빈 2차원배열생성
let visited = [...new Array(node + 1)].fill(0); //0으로 채운 1차원배열 생성
let answer = 0;
for (let i = 0; i < edge_num; i++) {
  let start = Number(input[i + 2].split(" ")[0]); //input에서 줄 수를 알려주는 입력값과 쌍의수 알려주는 입력값을 제외하기 위해 +2
  let end = Number(input[i + 2].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

visited[1] = 1;
function dfs(start) {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      answer++;
      dfs(end);
    }
  }
}
dfs(1); 
console.log(answer);
