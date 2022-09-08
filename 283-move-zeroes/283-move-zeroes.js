/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let numOfZeros = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            numOfZeros++;
        } else {
            nums[i - numOfZeros] = nums[i];
        }
    }
    
    while(numOfZeros) {
        nums[nums.length - numOfZeros] = 0;
        numOfZeros--;
    }
    
    return nums;
};