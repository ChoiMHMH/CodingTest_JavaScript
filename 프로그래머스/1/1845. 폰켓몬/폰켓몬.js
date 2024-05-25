function solution(nums) {
    let obj = {};
    const max = nums.length / 2;
    
    nums.forEach(num => {
        obj[num] = 1;
    });
    
    let typeCount = Object.keys(obj).length;
    return max >= typeCount ? typeCount : max;
}
