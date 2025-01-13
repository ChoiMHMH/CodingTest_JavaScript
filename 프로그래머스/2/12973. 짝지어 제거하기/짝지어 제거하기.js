function solution(s) {
    const stack = [];

    for (const char of s) {
        // 스택의 마지막 문자와 현재 문자가 같다면 제거
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char); // 그렇지 않으면 스택에 추가
        }
    }

    // 스택이 비어 있으면 성공적으로 제거 완료 (1), 아니면 실패 (0)
    return stack.length === 0 ? 1 : 0;
}
