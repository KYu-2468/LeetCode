/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const lis = new Array(nums.length);
    lis[lis.length - 1] = 1;
    
    for(let i = lis.length - 2; i >= 0; i--) {
        let max = 1;
        
        for(let j = i + 1; j < lis.length; j++) {
            if(nums[i] < nums[j]) {
                max = Math.max(max, 1 + lis[j]);
            }
        }
        lis[i] = max;
    }
    
    return Math.max(...lis);
};