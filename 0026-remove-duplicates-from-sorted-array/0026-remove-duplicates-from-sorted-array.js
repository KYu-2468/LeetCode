/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p2 = 0;
    
    for(let p1 = 0; p1 < nums.length; p1++) {
        
        if (nums[p1] === nums[p1 - 1]) {
            nums[p2] = nums[p1]
        } else {
            nums[p2] = nums[p1]
            p2++;
        }
    }
    
    return p2;
};