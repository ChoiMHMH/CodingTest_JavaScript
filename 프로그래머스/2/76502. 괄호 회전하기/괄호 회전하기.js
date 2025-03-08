function solution(s) {
    const n = s.length;
    let answer = 0;

    function isValid(str) {
        const stack = [];
        const brackets = {
            '(': ')',
            '[': ']',
            '{': '}'
        };

        for (let char of str) {
            if (char in brackets) {
                stack.push(char); 
            } else {
                const top = stack.pop();
                if (brackets[top] !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0; 
    }


    for (let i = 0; i < n; i++) {
        const rotated = s.slice(i) + s.slice(0, i); 
        if (isValid(rotated)) {
            answer++;
        }
    }

    return answer;
}