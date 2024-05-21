function solution(nums) {
    let obj = {};
    const max = nums.length/2;
    let countType = 0;
    
    for(let i of nums){
        obj[i] = 1;
    }
    for(let key in obj){
        countType += obj[key];
    }
    return max >= countType? countType : max;
    
}