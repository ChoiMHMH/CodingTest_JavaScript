function solution(n, works) {
    // 작업량이 남은 시간보다 적거나 같으면 모두 처리 가능
    if (works.reduce((a, b) => a + b, 0) <= n) {
        return 0;
    }

    works.sort((a, b) => b - a);

    while (n > 0) {
        works[0]--;
        let i = 0;
        while (i < works.length - 1 && works[i] < works[i + 1]) {
            [works[i], works[i + 1]] = [works[i + 1], works[i]];
            i++;
        }
        n--;
    }

    return works.reduce((acc, work) => acc + work ** 2, 0);
}
