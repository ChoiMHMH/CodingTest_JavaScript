function solution(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
  }