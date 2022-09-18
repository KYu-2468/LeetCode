/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let p2 = 0;
    let max = 0;
    
    for(let i = 0; i < nums1.length; i++) {
        p2 = Math.max(p2, i);
        while(nums2[p2 + 1] >= nums1[i]) {
            p2++;
        }
        
        max = Math.max(max, p2 - i);
    }
    
    return max;
};