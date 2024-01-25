const N = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

let newArr = [];
// 문자열을 배열로 변경합니다. Array.from()
// 3. mapfn 정의
// 배열의 모든 element를 숫자로 변경합니다.
const mapfn = (arg) => Number(arg);
function splitSum(){
for(let i = 0; i <= N; i++){

  // 2. 숫자를 유사배열객체(array like object)인
  //    문자열로 변경해 줍니다.
  const str = String(i);

  // 4. 문자열을 배열로 변경합니다 - split()
  // 배열의 각 element를 숫자로 변경합니다. - map()
  let newArr = str.split('').map(mapfn);
  newArr.push(i);
  
  let sum = newArr.reduce((accumulator, currentValue) => {
    return parseInt(accumulator) + parseInt(currentValue)
  }, 0);

  
  if(sum === N){
    return i;
  }
}
return 0;
}
console.log(splitSum(N));