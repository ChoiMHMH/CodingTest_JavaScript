function solution(n) {
    let answer = 0;
    const sqrt = Math.sqrt(n);
    
    if (sqrt % 1 == 0) {//제곱근일 경우
        answer = Math.pow(sqrt+1,2);
    } else {//제곱근이 아닐 경우
        answer = -1;
    }
    return answer
}