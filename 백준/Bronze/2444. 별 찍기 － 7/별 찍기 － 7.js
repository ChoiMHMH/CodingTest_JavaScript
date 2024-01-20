const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

//input 5일때
for(let i = 1; i <= input; i++){
  let stars = '';
  // 공백 증가 반복문(4,3,2,1)
  for(let k = 1; k <= input-i; k++){
    stars = stars + ' ';
  }
  // 별 증가 반복문(1,3,5,7,9)
  for(let j = 1; j <= i*2-1; j++){ 
    stars = stars + '*';
  }
  console.log(stars);
}
for(let i = 1; i <= input-1; i++){
  let stars = '';
  //공백 증가 반복문(1,2,3,4,5)
  for(let k = 1; k <= i; k++){
    stars = stars + ' ';
  }
  //별 증가 반복문(7,5,3,2,1)
  for(let j = input*2-3; j >= i*2-1; j--){
    stars = stars + '*';
  }
  console.log(stars);
}
