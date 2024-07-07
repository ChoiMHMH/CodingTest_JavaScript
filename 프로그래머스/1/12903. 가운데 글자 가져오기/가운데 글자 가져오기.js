// function solution(s) {

//     const center = Math.floor(s.length / 2);
//     if(s.length % 2 === 0){
//         return s.slice(center-1,center+1);
//     }else{
//         return s.slice(center,center+1);
//     }

// }

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}