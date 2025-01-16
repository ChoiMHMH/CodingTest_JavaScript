function solution(people, limit) {
    // 몸무게 배열을 오름차순 정렬
    people.sort((a, b) => a - b);

    let left = 0; // 가장 가벼운 사람의 인덱스
    let right = people.length - 1; // 가장 무거운 사람의 인덱스
    let boats = 0; // 필요한 보트 개수

    while (left <= right) {
        // 가장 가벼운 사람과 가장 무거운 사람이 함께 탈 수 있는 경우
        if (people[left] + people[right] <= limit) {
            left++; // 가장 가벼운 사람을 태움
        }
        // 가장 무거운 사람은 무조건 태움
        right--;
        boats++; // 보트 사용
    }

    return boats; // 총 필요한 보트 개수 반환
}
