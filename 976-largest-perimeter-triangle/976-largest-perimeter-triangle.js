/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    
    const isValidTri = (s1, s2, s3) => {
        if(s1 + s2 <= s3) {
            return false;
        }
        
        if(s1 + s3 <= s2) {
            return false;
        }
        
        if(s2 + s3 <= s1) {
            return false;
        }
        
        return true;
    }
    
    for(let i = nums.length - 1; i >= 2; i--) {
        if(isValidTri(nums[i], nums[i - 1], nums[i - 2])) {
            return nums[i] + nums[i - 1] + nums[i - 2];
        }
    }
    
    return 0;
};