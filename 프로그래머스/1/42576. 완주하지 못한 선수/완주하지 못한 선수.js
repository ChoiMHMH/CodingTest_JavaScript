function solution(participant, completion) {
    const hash = {}

    participant.forEach((el)=> !hash[el] ? hash[el] = 1 : hash[el] += 1);
    completion.forEach((el)=> hash[el] -= 1);
    
    for(let k in hash) {
        if (hash[k] === 1){return k;}
    }
}