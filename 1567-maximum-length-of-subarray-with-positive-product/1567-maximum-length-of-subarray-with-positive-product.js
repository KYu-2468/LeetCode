/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let max = 0;
    let total = 1;
    let start = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            start = i + 1;
            total = 1;
            continue;
        }
        
        total *= nums[i];
        
        if(total > 0) {
            max = Math.max(max, i - start + 1);
        }
    }
    
    total = 1;
    start = nums.length - 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0) {
            start = i - 1;
            total = 1;
            continue;
        }
        
        total *= nums[i];
        
        if(total > 0) {
            max = Math.max(max, start - i+ 1);
        }
    }
    
    return max;
};