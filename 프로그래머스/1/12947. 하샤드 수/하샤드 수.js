function solution(x) {
    const ArrX = String(x).split("");
    const sumOfPlaceValue = ArrX.reduce((acc,cur)=>acc+Number(cur),0);
    const answer = x % sumOfPlaceValue === 0 ? true : false;
    return answer;
}