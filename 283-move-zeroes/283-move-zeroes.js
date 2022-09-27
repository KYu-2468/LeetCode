/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let numOfEle = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]) {
            nums[numOfEle] = nums[i];
            numOfEle++;
        }
    }
    
    for(let i = 0; i < nums.length - numOfEle; i++) {
        nums[nums.length - 1 - i] = 0;
    }
    
    return nums;
};