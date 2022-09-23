/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, results = [], hashMap = {}, curArr = [], i = 0) {
    if(curArr.length === nums.length) {
        results.push(curArr);
        return;
    }
    
    while(i < nums.length) {
        if(!hashMap[nums[i]]) {
            hashMap[nums[i]] = true;
            permute(nums, results, hashMap, [...curArr, nums[i]], 0);
            hashMap[nums[i]] = false;
        }
        i++;
    }
    
    return results;
};

