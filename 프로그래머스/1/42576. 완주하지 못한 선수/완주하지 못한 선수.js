function solution(participant, completion) {
    const hash = {}

    participant.forEach((el)=> !hash[el] ? hash[el] = 1 : hash[el] += 1);
    completion.forEach((el)=> hash[el] -= 1);

    let name = Object.keys(hash).find(key => hash[key] === 1);
    
    return name;
}