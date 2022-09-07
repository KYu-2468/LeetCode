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
    
//     if (nums.length === 0) return 0;
    
//     const max = [0, nums[0]];
    
//     for(let i = 1; i < nums.length; i++) {
//         max.push(Math.max(max[i - 1] + nums[i], max[i]));
//     }
    
//     return max[max.length - 1]
    
//     if(nums.length === 1) {
//         return nums[0];
//     }
    
//     if(nums.length === 2) {
//         return Math.max(nums[0], nums[1]);
//     }
    
//     const max = [nums[0], nums[1], nums[0] + nums[2]];
    
//     for(let i = 3; i < nums.length; i++) {
//         const comb1 = max[i - 2] + nums[i];
//         const comb2 = max[i - 3] + nums[i];
        
//         max.push(Math.max(comb1, comb2));
//     }
    
//     return Math.max(max[max.length - 1], max[max.length - 2]);
};