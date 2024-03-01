function solution(name, yearning, photo) {
    var answer = [];
    const score = {};
    
    for(let i=0; i<name.length; i++){    
        score[name[i]] = Number(yearning[i]);
    }

    for(let i in photo){
        answer[i] = photo[i].reduce((acc,cur)=>{
            return acc + (score[cur]|| 0)
        },0)
    }

    console.log(answer)
    return answer;
}
