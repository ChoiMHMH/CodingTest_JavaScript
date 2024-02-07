function solution(left, right) {//13,17
    var answer = 0;
    for(;left <= right; left++){
        let sum = 0;
        
        for(let i =1; i <=left;i++){
            if(left % i ===0){
                sum++
            }
        }
        if(sum%2===0){
            answer += left;
        }else{
            answer -= left;
    }     
}
    
    return answer;
}