/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let total = 1;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            max = Math.max(max, 0);
            total = 1;
            continue;
        }
        total *= nums[i];
        max = Math.max(max, total);
    }
    
    total = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0) {
            max = Math.max(max, 0);
            total = 1;
            continue;
        }
        total *= nums[i];
        max = Math.max(max, total);
    }
    
    return max;
};