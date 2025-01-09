// 효율성 테스트 탈락
// function solution(n) {
//     let answer = 0;

//     for (let start = 1; start <= n; start++) {
//         let sum = 0;
//         for (let current = start; current <= n; current++) {
//             sum += current;
//             if (sum === n) { 
//                 answer++;
//                 break;
//             } else if (sum > n) {
//                 break;
//             }
//         }
//     }

//     return answer;
// }



// 연속된 자연수의 합을 이용한 방정식으로 해결
function solution(n) {
    let answer = 0;

    for (let k = 1; k * (k - 1) / 2 < n; k++) {
        if ((n - (k * (k - 1)) / 2) % k === 0) {
            answer++;
        }
    }

    return answer;
}