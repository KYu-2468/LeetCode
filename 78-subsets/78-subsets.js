/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, start = 0, comb = [], arr = []) {
    arr.push(comb);
    
    if(start === nums.length) return;
    
    for(let i = start; i < nums.length; i++) {
        subsets(nums, i + 1, [...comb, nums[i]], arr);
    }
    
    return arr;
};