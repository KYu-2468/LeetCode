/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (numsObj[target - nums[i]]) {
            return [numsObj[target - nums[i]] - 1, i]
        }
        numsObj[nums[i]] = i + 1;
    }
};