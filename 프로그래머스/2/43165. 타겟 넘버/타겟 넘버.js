function solution(numbers, target) {
  let answer = 0;
  //탈출 조건
  const dfs = (idx, sum) => {
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    //수행 동작
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);

  return answer;
}