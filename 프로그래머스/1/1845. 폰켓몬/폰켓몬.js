function solution(nums) {
    let obj = {};
    const max = nums.length / 2;
    
    nums.forEach(num => {
        obj[num] = 1;
    });
    
    console.log(Object.keys(obj))
    let typeCount = Object.keys(obj).length;
    return max >= typeCount ? typeCount : max;
}
