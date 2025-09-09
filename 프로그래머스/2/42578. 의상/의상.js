function solution(clothes) {
  // 종류별 개수를 센다
  const byType = new Map();
  for (const [name, type] of clothes) {
    byType.set(type, (byType.get(type) || 0) + 1);
  }

  // 각 종류별 (입는 방법 수 + 안 입는 선택 1)들을 곱한다
  let total = 1;
  for (const count of byType.values()) {
    total *= (count + 1);
  }

  // 전부 안 입는 경우(1가지) 제외
  return total - 1;
}
