function solution(s) {
    let answer = '';
    
    answer = s
        .split(" ") //["3people","unFollowed","me"]
        .map(word => {
            if (word.length === 0) return ""; // 빈 문자열 처리
            return word[0].toUpperCase() + word.slice(1).toLowerCase();// 첫 글자는 대문자로, 나머지는 소문자로
        }) //["3people","Unfollowed","Me"]
        .join(" ");

    return answer;
}