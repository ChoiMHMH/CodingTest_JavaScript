// function solution(n) {
//     let answer = '';
//     let i = 0;
    
//     while(i < n){
//         if(i === 0){
//             answer += '수';
//             i++;
//             continue;
//         }
//         if(answer.substr(-1) === '박'){
//             answer += '수';
//             i++;
//             continue;
//         }
//         answer += '박';
//         i++;       
//     }
//     return answer;
// }
function solution(n){
    const answer = "수박".repeat(n/2+1).slice(0,n);
    return answer;
}
