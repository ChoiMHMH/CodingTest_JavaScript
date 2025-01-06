function solution(s) {
    let count = 0; 
    let removedZeros = 0; 

    while (s !== "1") {
        const zeroCount = s.split('0').length - 1; 
        removedZeros += zeroCount;
        s = s.replace(/0/g, ''); 
        s = s.length.toString(2);
        count++;
    }

    return [count, removedZeros];
}

/*
[...s]로 문자열을 배열로 변환하고, 다시 filter를 호출하여 새로운 배열을 생성하므로 메모리 사용량이 증가

function solution(s) {
    let count = 0; 
    let removedZeros = 0; 

    while (s !== "1") {
        const filtered = [...s].filter(char => char === '1');
        removedZeros += s.length - filtered.length;
        s = filtered.length.toString(2);
        count++;
    }

    return [count, removedZeros];
}
*/