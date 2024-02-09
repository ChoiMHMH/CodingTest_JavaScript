function solution(s) {
    let word = [...s];
    let answer = word.sort().reverse().join('');
    return answer;
}