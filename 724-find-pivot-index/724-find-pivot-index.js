/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    
    for(let i = 1; i < nums.length; i++) {
        rightSum += nums[i];
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === rightSum) {
            return i;
        } else {
            leftSum += nums[i];
            rightSum -= nums[i + 1];
        }
    }
    
    return -1;
};