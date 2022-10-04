/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let curSum = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > curSum + nums[i]) {
            curSum = 0;
        }
        
        curSum += nums[i];
        max = Math.max(curSum, max);
    }
    
    return max;
};