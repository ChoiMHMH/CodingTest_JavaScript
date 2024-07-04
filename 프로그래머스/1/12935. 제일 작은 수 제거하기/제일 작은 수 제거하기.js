function solution(arr) {
    // 배열이 비어있는 경우를 처리
    if (arr.length === 1) {
        return [-1];
    }
    
    // 가장 작은 요소를 찾기
    let min = Math.min(...arr);
    
    // 가장 작은 요소를 제외한 배열 생성
    return arr.filter(num => num !== min);
}
