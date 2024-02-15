function solution(array, commands) {
    var answer = [];
    for (var i = 0; i < commands.length; i++){
        //i~j숫자까지 자르고
        let cutArr = array.slice(commands[i][0]-1, commands[i][1]);
        //정렬
        let cutAndSoltArr = cutArr.sort((a,b)=>a-b);
        //k번째 있는 수
        answer.push(cutAndSoltArr[commands[i][2] - 1]);
    }
    return answer;
}