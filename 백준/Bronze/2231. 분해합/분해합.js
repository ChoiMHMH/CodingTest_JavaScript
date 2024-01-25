const N = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();


function splitSum() {
  for (let i = 0; i <= N; i++) {

    const str = String(i);

    // 문자열을 잘라서 배열로 변경합니다 - split()
    let newArr = str.split('');
    newArr.push(i);//숫자 본인

    let sum = newArr.reduce((accumulator, currentValue) => {
      return Number(accumulator) + Number(currentValue)
    }, 0);


    if (sum === N) {
      return i;
    }
  }
  return 0;
}
console.log(splitSum(N));
