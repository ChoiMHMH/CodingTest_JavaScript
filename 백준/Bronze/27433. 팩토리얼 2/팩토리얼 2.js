const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input= fs.readFileSync(file).toString().trim().split(' ');

const n = input.map(Number);

function factorial(n) {
   if(n < 0){
    return -1;
   }else if (n == 0){
    return 1;
   }else{
    return (n * factorial(n -1));
   }

}

console.log(factorial(n));

