function solution(a, b) {
    if(a===b){
        return a
    }else if(a > b){
        return sum(a,b);
    }else{
        return sum(b,a);
    }
    
    function sum(big,small){
        let sum = 0;
        for(let i = small; i <= big; i++){
            sum += i;
        }
        return sum
    }
}