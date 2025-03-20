function solveACMCraft(input) {
    let index = 0;
    const T = parseInt(input[index++]);
    const results = [];

    for (let t = 0; t < T; t++) {
        const [N, K] = input[index++].split(' ').map(Number);
        const buildingTime = [0, ...input[index++].split(' ').map(Number)];

        const graph = Array.from({ length: N + 1 }, () => []);
        const inDegree = Array(N + 1).fill(0);
        const dp = Array(N + 1).fill(0);

        for (let i = 0; i < K; i++) {
            const [X, Y] = input[index++].split(' ').map(Number);
            graph[X].push(Y);
            inDegree[Y]++;
        }

        const W = parseInt(input[index++]); 


        const queue = [];
        for (let i = 1; i <= N; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
                dp[i] = buildingTime[i]; 
            }
        }

        while (queue.length > 0) {
            const cur = queue.shift();

            for (const next of graph[cur]) {
                dp[next] = Math.max(dp[next], dp[cur] + buildingTime[next]);
                if (--inDegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        results.push(dp[W]);
    }

    console.log(results.join('\n'));
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveACMCraft(input);
