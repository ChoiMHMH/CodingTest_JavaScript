function solution(s){
    var answer = true;
    let pCount = s.toUpperCase().split("P").length;
    let yCount = s.toUpperCase().split("Y").length;
    
    console.log('Hello Javascript')

    return pCount === yCount? true : false;
}