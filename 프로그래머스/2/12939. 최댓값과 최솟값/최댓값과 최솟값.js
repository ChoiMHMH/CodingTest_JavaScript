function solution(s) {
    const number = s.split(' ').map(Number);
    
    const min = Math.min(...number);
    const max = Math.max(...number);

    return `${min} ${max}`;
}