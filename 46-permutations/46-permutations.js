/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, results  = [], combos = []) {
    
    if(nums.length === 1) {
        results.push([...combos, nums[0]]);
        return results;
    }
    
    for(let i = 0; i < nums.length; i++) {
        
        permute([...nums.slice(0, i), ...nums.slice(i + 1)], results, [...combos, nums[i]]);
        
    }
    
    return results;
};

