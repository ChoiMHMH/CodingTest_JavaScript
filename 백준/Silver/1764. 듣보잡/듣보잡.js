const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(' ');

const Nset = new Set();
const Mset = new Set();
for(let i=0; i<input.length; i++) {
    if(i < N) {
        Nset.add(input[i]);
    } else {
        Mset.add(input[i]);
    }
}

const noListenViewer = new Set([...Nset].filter((value) => Mset.has(value)));

const newArr = [...noListenViewer]
sortArr = newArr.sort();

console.log(noListenViewer.size)
console.log(...sortArr)




