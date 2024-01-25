const N = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

let newArr = [];

// mapfn 정의
// 배열의 모든 element를 숫자로 변경합니다.
const mapfn = (arg) => Number(arg);
function splitSum() {
  for (let i = 0; i <= N; i++) {

    const str = String(i);

    // 문자열을 배열로 변경합니다 - split()
    // 배열의 각 element를 숫자로 변경합니다. - map()
    let newArr = str.split('').map(mapfn);
    newArr.push(i);//숫자 본인

    let sum = newArr.reduce((accumulator, currentValue) => {
      return parseInt(accumulator) + parseInt(currentValue)
    }, 0);


    if (sum === N) {
      return i;
    }
  }
  return 0;
}
console.log(splitSum(N));
