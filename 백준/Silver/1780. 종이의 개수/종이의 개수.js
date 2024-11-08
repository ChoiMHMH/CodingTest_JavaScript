const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// N을 추출하고, 행렬을 2차원 배열로 변환
const N = parseInt(input[0]);
const matrix = input.slice(1).map(line => line.split(" ").map(Number));

function countPapers(matrix) {
    const counts = { '-1': 0, '0': 0, '1': 0 };

    function divideAndConquer(x, y, size) {
        const firstValue = matrix[x][y];
        let allSame = true;

        // 현재 종이가 같은 숫자로만 이루어져 있는지 확인
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (matrix[i][j] !== firstValue) {
                    allSame = false;
                    break;
                }
            }
            if (!allSame) break;
        }

        // 모두 같은 숫자로 이루어져 있다면 카운트 증가
        if (allSame) {
            counts[firstValue]++;
        } else {
            // 9개로 나눠서 재귀적으로 검사
            const newSize = size / 3;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    divideAndConquer(x + i * newSize, y + j * newSize, newSize);
                }
            }
        }
    }

    divideAndConquer(0, 0, matrix.length);

    // 결과 출력
    console.log(counts['-1']);
    console.log(counts['0']);
    console.log(counts['1']);
}

// 함수 호출
countPapers(matrix);
