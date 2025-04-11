function solution(k, m, score) {
    const sorted = [...score].sort((a, b) => b - a);
    let total = 0;
    
    for (let i = m - 1; i < sorted.length; i += m) {
        total += sorted[i] * m;
    }
    
    return total;
}
