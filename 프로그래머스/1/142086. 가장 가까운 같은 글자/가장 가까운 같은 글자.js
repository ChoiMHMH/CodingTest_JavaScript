// function solution(s) {
//     let answer = [];
//     const position = {};
    

//     for(let i =0; i<s.length; i++){//s = b a n a n a
//         if(!position[s[i]]){
//             answer.push(-1)
//         }else{
//             answer.push(i - position[s[i]])
//         }
//         position[s[i]] = i
//         console.log(position)
//     }

//     return answer;
// }
function solution(s) {
    let answer = [];
    const position = {};
    
    for (let i = 0; i < s.length; i++) {
        if (position[s[i]] === undefined || position[s[i]] === i) {
            answer.push(-1);
        } else {
            let minDistance = i - position[s[i]];
            answer.push(minDistance);
        }
        position[s[i]] = i;
    }

    return answer;
}

// Example usage:
console.log(solution("banana")); // Output: [-1, -1, -1, 2, 2, 2]
