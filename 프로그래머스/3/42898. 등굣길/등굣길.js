function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    
    dp[1][1] = 1;
    
    for (let [puddleX, puddleY] of puddles) {
        dp[puddleX][puddleY] = -1;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 && j === 1) continue;
            
            if (dp[i][j] === -1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % MOD;
            }
        }
    }
    
    return dp[m][n];
}
