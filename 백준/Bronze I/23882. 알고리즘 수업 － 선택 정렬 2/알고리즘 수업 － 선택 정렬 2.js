const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
const answer = input.pop();
const N = input[0].shift(); //배열의 크기
const K = input[0].pop(); //교환횟수

function selectionSort(arr) {
  let count = 0; //교환횟수 세기
  for (let last = N; last >= 2; last--) {
    let maxIndex = 0;
    for (let i = 1; i < last; i++) {
      if (arr[i] > arr[maxIndex]) {
        //싹다비교해서 가장 값이 큰 인덱스 찾기
        maxIndex = i;
      }
    }
    if (last - 1 !== maxIndex) {
      const temp = arr[last - 1];
      arr[last - 1] = arr[maxIndex];
      arr[maxIndex] = temp;
      count++;
      if (count === K) {
        return arr.join(" ");
      }
    }
  }
  //교환횟수가 K보다 작으면
  if (count < K) {
    return -1;
  }
  return arr;
}

const solution = selectionSort(answer);
console.log(solution);
