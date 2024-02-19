function solution(n, words) {
    var answer = [];

    
    const compare = [];
    compare[0] = words[0];
    for(let i=0; i<words.length -1; i++){

        let first = words[i].charAt(words[i].length-1);
        let second = words[i+1].charAt(0);
        //현재인덱스의 끝글자와 다음 인덱스의 첫글자 비교
        //또는 나왔던 단어
        console.log('비교'+first+second)
        if(first !== second || compare.includes(words[i+1])){
            return [((i+1)%n)+1 , Math.floor(((i+1)/n)+1)]    
        }
        compare[i+1] = words[i+1];


    }
    return [0,0];
}