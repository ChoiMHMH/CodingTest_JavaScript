function solution(num) {
    let count = 0;
    let number = num;
    while(count < 500){
        if(number === 1){
            return count;
        }

        if(number % 2 === 0){
            number = number / 2;
        } else {
            number = number * 3 + 1;
        }
        
        count ++;
    }
    if(count === 500 && number !== 1){
        return -1;
    }

}