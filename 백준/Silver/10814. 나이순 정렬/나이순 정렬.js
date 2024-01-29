const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el=>el.split(" "));



input.shift();//앞에 제거

const newArr = input.sort((a,b)=>a[0]-b[0]) //|| a[1].localeCompare(b[1]));//나이순

newArr.forEach(element => {
  console.log(`${element[0]} ${element[1]}`);
});