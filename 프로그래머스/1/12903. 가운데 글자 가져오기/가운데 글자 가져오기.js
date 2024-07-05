function solution(s) {

    const center = s.length / 2;
    if(s.length % 2 === 0){
        return s.slice(center-1,center+1);
    }else{
        return s.slice(center,center+1);
    }

}