/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let max = nums[0];
    let start = 0;
    let curSum = max;
    const length = nums.length;
    const maxArr1 = [];
    const maxArr2 = new Array(nums.length);
    
    for(let i = 1; i < nums.length; i++) {
        if(curSum <= 0) {
            curSum = 0;
            start = i;
        }
        
        curSum += nums[i];
        max = Math.max(max, curSum);
    }

    let max1 = nums[0];
    curSum = 0;
    for(let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        max1 = Math.max(max1, curSum);
        maxArr1.push(max1);
    }
    
    let max2 = nums[nums.length - 1];
    curSum = 0;
    for(let i = nums.length - 1; i >= 0; i--) {
        curSum += nums[i];
        max2 = Math.max(max2, curSum);
        maxArr2[i] = max2;
    }
    
    for(let i = 1; i < maxArr2.length; i++) {
        max = Math.max(max, maxArr2[i] + maxArr1[i - 1]);
    }
    
    return max;
};