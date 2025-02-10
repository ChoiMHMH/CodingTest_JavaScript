function solution(triangle) {
    let n = triangle.length;

    // 아래에서 위로 올라가면서 최댓값을 갱신
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }

    return triangle[0][0];
}
