const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

let testNum = stdin[0];

for(let i = 1; i <= testNum; i++)
{
    let str = stdin[i].split(" ");
    let n = parseInt(str[0]);
    let m = parseInt(str[1]);

    let dp = [];
    for (let i = 0; i < m+1; i++) {
        let a = new Array(n+1).fill(0);
        dp.push(a);
    }


    function combi(m,n){
        if(dp[m][n] > 0) return dp[m][n];
        if(n == m || n == 0) return 1;
    
        dp[m][n] = combi(m-1,n-1) + combi(m-1,n);
        return dp[m][n];
    }
    

    console.log(combi(m,n));
}