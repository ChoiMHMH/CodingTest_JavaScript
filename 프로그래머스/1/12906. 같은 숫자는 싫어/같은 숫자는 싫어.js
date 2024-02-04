function solution(arr)
{
    const answer = [];
    let head = 0;

    arr.forEach((el,idx)=>{
        if(idx === 0){
             answer.push(el);
        }else if(el !== arr[idx -1]){
            answer.push(el);
            head++
        }
    })    
    console.log(answer);
    return answer;

}
