// function solution(n) {
//     let answer = 0;

//     while (n > 0) {
//         if (n % 2 === 0) {
//             n /= 2;
//         } else {
//             n -= 1;
//             answer++;
//         }
//     }

//     return answer;
// }



/*
어떤 수 a에 2를 곱하는 방법을 a * 2로 생각할 수 있지만 시프트 연산(a << 1) 도 동일한 결과. 왼쪽 시프트 연산의 경우 이진수 관점에서 가장 오른쪽에 0을 넣는 것과 마찬가지 ( "0b101" << 1 = "0b1010"). 주어진 수를 이진수로 바꾸어 보면 1이 나오는 위치에서 1칸 이동(에너지 1) 0이 나오는 위치에서 2배 이동(에너지 0)하면 되니, 답은 n을 이진수로 바꿨을 때 1의 갯수.
*/
function solution(n) {
    return n.toString(2).replace(/0/g,"").length
}