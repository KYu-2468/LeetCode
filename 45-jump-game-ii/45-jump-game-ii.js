/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let maxJump = 0;
    let curJump = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        
        if(i <= curJump) {
            maxJump = Math.max(maxJump, i + nums[i]);
        } else {
            curJump = maxJump;
            maxJump = i + nums[i];
        }
        
        if(i === curJump || i === nums.length - 1) {
            jumps++;
        }
        
    }
    
    
    return jumps;
};