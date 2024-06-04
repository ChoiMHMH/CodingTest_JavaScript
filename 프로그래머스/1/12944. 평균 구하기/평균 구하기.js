function solution(arr) {
    const sum = arr.reduce((acc,cur)=>acc+cur,0);
    const answer = sum/ arr.length;
    return answer;
}