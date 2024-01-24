const n = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
// n = 5라고 가정
// 시간초과
// function MenOfPassion(n) {
//   let sum = 0;
//   for (let i = 0; i < n - 1; i++) {  //0,1,2,3
//       for (let j = i + 1; j < n; j++) {  //1234 234 34 4
//           sum++
//       }
//   }
//   return sum;
// }
//

console.log((n*(n-1))/2);
console.log(2);
