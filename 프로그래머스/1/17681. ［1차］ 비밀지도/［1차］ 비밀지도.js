function solution(n, arr1, arr2) {
    return arr1.map((num1, i) => {
        const num2 = arr2[i];
        // OR 연산 후 n자리 이진수로 변환, 앞에 0 채우기
        const binary = (num1 | num2).toString(2).padStart(n, '0');
        // 1이면 #, 0이면 공백으로 매핑, ai사용
        return binary.replace(/1/g, '#').replace(/0/g, ' ');
    });
}
