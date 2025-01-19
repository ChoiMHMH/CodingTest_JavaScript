function solution(arr) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }

    return answer;
}
