/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let total = 0;
    let product = nums[0];
    let p1 = 0;
    let p2 = 0;
    
    while(p2 < nums.length) {
        if(product >= k) {
            product /= nums[p1];
            p1++;
            
            if(p1 > p2) {
                p2 = p1;
                product = nums[p2];
            }
            
        } else {
            total += 1 + p2 - p1;
            p2++;
            product *= nums[p2];
        }
    }
    
    return total;
};