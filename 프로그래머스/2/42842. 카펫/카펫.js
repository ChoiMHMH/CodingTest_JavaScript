function solution(brown, yellow) {
    // 전체 격자 수
    const totalTiles = brown + yellow;

    // 전체 타일의 가로, 세로 크기를 찾기 위해 반복문 실행
    for (let height = 3; height <= Math.sqrt(totalTiles); height++) {
        if (totalTiles % height === 0) {
            const width = totalTiles / height; // 나머지 없이 나누어진 경우 가로 계산

            // 갈색 타일과 노란색 타일 개수 조건 확인
            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
}
