/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length === 1) {
        return nums[0]
    }
    
    let prev1 = Math.max(nums[1], nums[0]);
    let prev2 = nums[0];
        
    for(let i = 2; i < nums.length; i++) {
        [prev2, prev1] = [prev1, Math.max(prev1, nums[i] + prev2)];
    }
    
    return prev1;
};