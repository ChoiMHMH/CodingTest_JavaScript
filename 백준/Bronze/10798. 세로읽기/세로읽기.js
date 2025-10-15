const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const words = input.map(line => line.trim());

const maxLength = Math.max(...words.map(word => word.length));

let result = '';

// 각 열(세로)을 순회
for (let col = 0; col < maxLength; col++) {
    // 각 행(가로)을 순회
    for (let row = 0; row < 5; row++) {
        // 해당 위치에 글자가 있으면 결과에 추가
        if (col < words[row].length) {
            result += words[row][col];
        }
    }
}

console.log(result);