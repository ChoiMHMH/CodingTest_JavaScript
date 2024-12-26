function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') {
            return ' '; // 공백은 그대로 유지
        }

        const charCode = char.charCodeAt(0); // 문자 코드 가져오기
        const isUpperCase = char >= 'A' && char <= 'Z'; // 대문자 여부 확인
        const isLowerCase = char >= 'a' && char <= 'z'; // 소문자 여부 확인

        if (isUpperCase) {
            return String.fromCharCode(((charCode - 65 + n) % 26) + 65); // 대문자 범위 내에서 순환
        }

        if (isLowerCase) {
            return String.fromCharCode(((charCode - 97 + n) % 26) + 97); // 소문자 범위 내에서 순환
        }
    }).join('');
}