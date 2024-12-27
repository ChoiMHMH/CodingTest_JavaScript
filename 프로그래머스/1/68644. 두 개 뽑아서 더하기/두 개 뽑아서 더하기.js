function solution(numbers) {
    let answer = [];

    let sums = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sums.add(numbers[i] + numbers[j]);
        }
    }
    
    answer = Array.from(sums).sort((a, b) => a - b);
    
    return answer;
}
