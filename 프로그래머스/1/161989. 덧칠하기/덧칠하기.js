function solution(n, m, section) {
  let count = 0;
  let current = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > current) {
      count++;
      current = section[i] + m - 1;
    }
  }

  return count;
}
