function solution(s) {
    let result = 0;
    let i = 0;
    
    while (i < s.length) {
        let countX = 0, countNonX = 0;
        let x = s[i];
        let j = i;
        
        while (j < s.length) {
            if (s[j] === x) {
                countX++;
            } else {
                countNonX++;
            }
            
            if (countX === countNonX) {
                result++;
                i = j + 1;
                break;
            }
            
            j++;
        }
        
        if (countX !== countNonX) {
            result++;
            break;
        }
    }
    
    return result;
}

