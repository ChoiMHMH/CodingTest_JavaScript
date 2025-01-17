function solution(n) {
    if (n === 1) return 1;

    let prev = 1; 
    let curr = 2; 

    for (let i = 3; i <= n; i++) {
        let next = (prev + curr) % 1234567;
        prev = curr;
        curr = next;
    }

    return curr;
}
