function solution(strings, n) {
    strings.sort((a, b) => {
        // n번째 인덱스의 문자 비교
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        // n번째 문자가 같을 경우 사전 순으로 정렬
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    return strings;
}