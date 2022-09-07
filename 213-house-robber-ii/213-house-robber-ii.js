/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }
    
    const getMax = (start, end) => {
        let prev2 = nums[start];
        let prev1 = Math.max(prev2, nums[start + 1]);
        
        for(let i = start + 2; i <= end; i++) {
            [prev2, prev1] = [prev1, Math.max(prev1, nums[i] + prev2)];
        }
        
        return prev1;
    }
    
    return Math.max(getMax(0, nums.length - 2), getMax(1, nums.length - 1));
    
};