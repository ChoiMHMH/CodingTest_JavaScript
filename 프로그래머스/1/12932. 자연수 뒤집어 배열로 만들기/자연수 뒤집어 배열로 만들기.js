function solution(n) {
    
    const arr = n.toString().split('').reverse();
    let answer = [];
    
    for(let i of arr){
        answer.push(Number(i))
    }

  return answer;
}