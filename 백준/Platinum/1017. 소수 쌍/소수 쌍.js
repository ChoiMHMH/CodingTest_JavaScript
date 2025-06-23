const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const even = [], odd = [];
for (let x of arr) {
    if (x % 2 === 0) even.push(x);
    else odd.push(x);
}

let answer = [];
let first = arr[0];
let L, R; // left, right

// left에는 first가 들어가야 한다.
if (first % 2 === 0) {
    L = even;
    R = odd;
} else {
    L = odd;
    R = even;
}

// pair 후보는 right 그룹에 있는 애들 중 first+pair가 소수인 경우
for (let pi = 0; pi < R.length; pi++) {
    let pair = R[pi];
    if (!isPrime(first + pair)) continue;

    // left, right에서 first, pair를 각각 제외
    let left = [], right = [];
    for (let x of L) if (x !== first) left.push(x);
    for (let x of R) if (x !== pair) right.push(x);

    if (left.length !== right.length) continue; // 필수 체크

    // 인접행렬 adj[i] = right의 j번째와 소수합 여부
    const adj = Array.from({length: left.length}, () => []);
    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {
            if (isPrime(left[i] + right[j])) adj[i].push(j);
        }
    }

    // 이분 매칭
    function bpm(v, visited, matchTo) {
        for (let ni of adj[v]) {
            if (visited[ni]) continue;
            visited[ni] = true;
            if (matchTo[ni] === -1 || bpm(matchTo[ni], visited, matchTo)) {
                matchTo[ni] = v;
                return true;
            }
        }
        return false;
    }

    let matchTo = Array(right.length).fill(-1);
    let cnt = 0;
    for (let i = 0; i < left.length; i++) {
        let visited = Array(right.length).fill(false);
        if (bpm(i, visited, matchTo)) cnt++;
    }
    if (cnt === left.length) answer.push(pair);
}

if (answer.length === 0) console.log(-1);
else console.log(answer.sort((a, b) => a - b).join(' '));
