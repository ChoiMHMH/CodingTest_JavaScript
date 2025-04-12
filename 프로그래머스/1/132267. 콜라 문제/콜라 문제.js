function solution(a, b, n) {
    let totalCola = 0;
    let emptyBottles = n;
    
    while (emptyBottles >= a) {
        const currentCola = Math.floor(emptyBottles / a) * b;
        totalCola += currentCola;
        emptyBottles = (emptyBottles % a) + currentCola;
    }
    
    return totalCola;
}