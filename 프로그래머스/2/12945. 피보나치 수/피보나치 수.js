function solution(n) {
    const MOD = 1234567;
    let prev = 0; // F(0)
    let curr = 1; // F(1)

    for (let i = 2; i <= n; i++) {
        let next = (prev + curr) % MOD; // F(n) = (F(n-1) + F(n-2)) % MOD
        prev = curr;
        curr = next;
    }

    return curr; // F(n)
}
