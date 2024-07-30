// function solution(n) {
//   const trinary = n.toString(3);
//   const triReverse = trinary.split("").reverse().join("");

//   return parseInt(triReverse, 3);
// }
//https://velog.io/@gagaeun/JavaScript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-3%EC%A7%84%EB%B2%95-%EB%92%A4%EC%A7%91%EA%B8%B0-%EC%A7%84%EC%88%98-%EB%B3%80%ED%99%98 블로그 참고

const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}