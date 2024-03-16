function solution(d, budget) {
    let answer = 0;
    const sortBudget = d.sort((a,b)=>a-b);
    let remain = budget;
    
    for(let i=0; i<d.length; i++){
        remain -= sortBudget[i];
        if(remain<0){
            break;
        }else{    
            answer++;    
        }
    }
    return answer;
}