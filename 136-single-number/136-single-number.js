/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = 0;
    
    for(let i = 0; i < nums.length; i++) {
        num = num ^ nums[i];
    }
    
    return num;
};