/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        memo[i] = Math.max(memo[i - 1], (memo[i - 2] || 0) + nums[i]);
    }
    
    return memo[memo.length - 1];
    
//     let prev1 = Math.max(nums[1], nums[0]);
//     let prev2 = nums[0];
        
//     for(let i = 2; i < nums.length; i++) {
//         [prev2, prev1] = [prev1, Math.max(prev1, nums[i] + prev2)];
//     }
    
//     return prev1;
};