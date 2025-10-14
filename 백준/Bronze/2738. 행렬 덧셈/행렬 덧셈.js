const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

// 행렬 A 읽기
const A = [];
for (let i = 1; i <= N; i++) {
  A.push(input[i].split(' ').map(Number));
}

// 행렬 B 읽기
const B = [];
for (let i = N + 1; i <= 2 * N; i++) {
  B.push(input[i].split(' ').map(Number));
}

// 행렬 덧셈
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(A[i][j] + B[i][j]);
  }
  console.log(row.join(' '));
}