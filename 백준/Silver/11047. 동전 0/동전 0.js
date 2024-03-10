const input = require("fs") //동전의 가치값
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

firstLine = input[0].split(" "); //첫째줄 처리
input.shift(); //첫째줄 삭제
input.sort((a, b) => b - a); //큰것부터 비교하기 위함//동전갯수 최솟값//내림차순

const [N, K] = firstLine; //N(10), K(4200)//N(동전의 종류), K(가치의 합)
let answer = 0;
let extraK = K;

for (let i = 0; i < N; i++) {
  if (Math.floor(extraK / input[i])) {
    let temp = Math.floor(extraK / input[i]); //동전 갯수
    answer += temp; //사용한 전체 동전 갯수 저장
    extraK = extraK - temp * input[i]; //남은 가치의 합
  }
}
console.log(answer);
