function solution(k, tangerine) {
    // 귤의 크기별로 개수를 세기 위해 Map 객체 사용
    const countMap = new Map();

    // 크기별 귤 개수 세기
    tangerine.forEach(size => {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    });

    // 크기별 개수를 내림차순으로 정렬
    const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);

    let sum = 0; // 선택한 귤의 개수
    let varietyCount = 0; // 선택한 크기의 종류 수

    for (const count of sortedCounts) {
        sum += count;
        varietyCount++;

        // 선택한 귤의 개수가 k 이상이면 종료
        if (sum >= k) {
            break;
        }
    }

    return varietyCount;
}
