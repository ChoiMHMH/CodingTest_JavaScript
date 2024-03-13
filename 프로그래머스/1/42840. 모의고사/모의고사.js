function solution(answers) {
    const supojas = [[1,2,3,4,5], [2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let answer = [] 
    
    for(let k in supojas){
        let count = 0;
        for(let i in answers){
            if(answers[i] === supojas[k][i%supojas[k].length]){
                count ++
            }    
        }  
        answer[k] = count;    
    }
    //아래부터는 정렬 answer   

    
    answer//[5,0,0]
    const max = Math.max(...answer);
    const realAns = answer.map((el, idx)=>{
        if(el === max) {return idx+1}   
    }).filter((el)=>{
        return el
    })
    

 return realAns
}