function solution(n, lost, reserve) {
    let answer = new Array(n).fill(1); // 전체 학생의 체육복 수를 1로 초기화
    for (let i of lost) {
        answer[i - 1]--; // 체육복을 도난당한 학생의 수를 감소
    }

    for (let i of reserve) {
        answer[i - 1]++; // 여벌의 체육복을 가진 학생의 수를 증가
    }

    for (let i = 0; i < n; i++) {
        if (answer[i] === 0) { // 체육복이 없는 학생인 경우
            if (answer[i - 1] === 2) { // 앞 번호 학생이 여벌의 체육복을 가지고 있는 경우
                answer[i - 1]--; // 앞 번호 학생에게 체육복을 빌림
                answer[i]++; // 현재 학생이 체육복을 얻음
            } else if (answer[i + 1] === 2) { // 뒷 번호 학생이 여벌의 체육복을 가지고 있는 경우
                answer[i + 1]--; // 뒷 번호 학생에게 체육복을 빌림
                answer[i]++; // 현재 학생이 체육복을 얻음
            }
        }
    }

    let count = 0;
    answer.forEach((el) => {
        if (el > 0) {
            count++; // 체육 수업을 들을 수 있는 학생 수를 카운트
        }
    });
    return count;
}