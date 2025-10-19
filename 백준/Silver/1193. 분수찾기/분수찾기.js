const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const X = parseInt(input);

// X번째 분수가 속한 대각선 번호 찾기
let diagonal = 1;
let sum = 0;

while (sum + diagonal < X) {
    sum += diagonal;
    diagonal++;
}

// 해당 대각선에서 몇 번째 위치인지 계산
const position = X - sum;

let numerator, denominator;

if (diagonal % 2 === 0) {
    // 짝수 대각선: 분자 증가, 분모 감소
    numerator = position;
    denominator = diagonal - position + 1;
} else {
    // 홀수 대각선: 분자 감소, 분모 증가
    numerator = diagonal - position + 1;
    denominator = position;
}

console.log(`${numerator}/${denominator}`);