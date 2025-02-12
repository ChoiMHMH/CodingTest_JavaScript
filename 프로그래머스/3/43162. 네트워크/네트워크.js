function solution(n, computers) {
    let visited = Array(n).fill(false);
    let networkCount = 0;

    function dfs(node) {
        visited[node] = true;
        for (let i = 0; i < n; i++) {
            // 연결되어 있고, 방문하지 않은 노드라면 DFS 재귀 호출
            if (computers[node][i] === 1 && !visited[i]) {
                console.log(visited)
                dfs(i);
            }
        }
    }

    //모든 컴퓨터 탐색
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            networkCount++;
        }
    }

    return networkCount;
}