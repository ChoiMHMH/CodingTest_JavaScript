function solution(arr1, arr2) {
    const result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const rowResult = [];

        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            
            for (let k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            
            rowResult.push(sum);
        }
        
        result.push(rowResult);
    }
    
    return result;
}
