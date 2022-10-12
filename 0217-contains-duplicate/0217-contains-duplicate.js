/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const freq = new Set();
    
    for(let num of nums) {
        if(freq.has(num)) {
            return true;
        }
        
        freq.add(num);
    }
    
    return false;
};