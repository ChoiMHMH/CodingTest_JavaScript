function solution(k, dungeons) {
  // 백트래킹(DFS)로 모든 순서/선택을 탐색하면서 최댓값 갱신
  const n = dungeons.length;
  const visited = Array(n).fill(false);
  let answer = 0;

  function dfs(energy, count) {
    // 현재까지 돌 수 있었던 던전 수로 최댓값 갱신
    if (count > answer) answer = count;

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      const [need, cost] = dungeons[i];

      // 현재 피로도가 최소 필요 피로도 이상일 때만 진행
      if (energy >= need) {
        visited[i] = true;
        dfs(energy - cost, count + 1);
        visited[i] = false; // 원복
      }
    }
  }

  dfs(k, 0);
  return answer;
}
