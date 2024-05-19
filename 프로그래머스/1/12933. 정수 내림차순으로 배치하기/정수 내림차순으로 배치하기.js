function solution(n) {
  const stringN = n + "";
  const newArr = stringN
    .split("")
    .sort((a,b)=>b-a)
    .join("");

  return Number(newArr);
}