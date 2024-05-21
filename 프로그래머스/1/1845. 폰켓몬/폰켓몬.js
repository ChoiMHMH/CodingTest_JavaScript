function solution(nums) {
    let arr = {};
    const count = nums.length/2;
    let countObj = 0;
    
    for(let i of nums){
        arr[i] = 1;
    }
    for(let key in arr){
        countObj += arr[key];
    }
    
    if (count >= countObj){
        return countObj;
    }else{
        return count;
    }
    
}