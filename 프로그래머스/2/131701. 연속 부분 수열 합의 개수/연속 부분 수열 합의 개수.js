function solution(elements) {
    const n = elements.length;
    const extended = [...elements, ...elements]; // 원형 수열을 위해 확장
    const uniqueSums = new Set();

    // 부분 수열의 길이 (1부터 n까지)
    for (let length = 1; length <= n; length++) {
        // 시작점 (0부터 n-1까지)
        for (let i = 0; i < n; i++) {
            let sum = 0;
            // 길이만큼 합 계산
            for (let j = 0; j < length; j++) {
                sum += extended[i + j];
            }
            uniqueSums.add(sum);
        }
    }
    
    return uniqueSums.size;
}
