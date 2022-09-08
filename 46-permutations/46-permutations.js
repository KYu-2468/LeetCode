/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, results = [], comb = []) {
    if(comb.length === nums.length) {
        results.push(comb);
        return;
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(!comb.includes(nums[i])) {
            permute(nums, results, [...comb, nums[i]]);
        }
    }
    
    return results;
};

