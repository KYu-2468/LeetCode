/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxJumps = 0;
    
    for(let i = 0; i < nums.length - 1; i++) {
        maxJumps = Math.max(maxJumps, i + nums[i]);
        if(i >= maxJumps) {
            return false;
        }
    }
    
    return true;
};