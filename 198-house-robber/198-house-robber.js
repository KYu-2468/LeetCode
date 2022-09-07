/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    
    const max = [nums[0], nums[1], nums[0] + nums[2]];
    
    for(let i = 3; i < nums.length; i++) {
        const comb1 = max[i - 2] + nums[i];
        const comb2 = max[i - 3] + nums[i];
        
        max.push(Math.max(comb1, comb2));
    }
    
    return Math.max(max[max.length - 1], max[max.length - 2]);
};