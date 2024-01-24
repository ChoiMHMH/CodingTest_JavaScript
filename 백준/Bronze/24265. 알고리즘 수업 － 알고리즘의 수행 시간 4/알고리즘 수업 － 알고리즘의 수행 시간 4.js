const n = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

// function MenOfPassion(A, n) {
//   let sum = 0;
//   for (let i = 0; i < n - 1; i++) {
//       for (let j = i + 1; j < n; j++) {
//           sum += A[i] * A[j]; // 코드1
//       }
//   }
//   return sum;
// }


console.log(n*(n-1) - (n-1)*n/2);
console.log(2);