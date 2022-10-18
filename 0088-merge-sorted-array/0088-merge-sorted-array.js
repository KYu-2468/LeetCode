/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const outputArr = new Array(m + n);
    let p1 = 0;
    let p2 = 0;
    
    for(let i = 0; i < m + n; i++) {
        if (p1 >= m) {
            outputArr[i] = nums2[p2];
            p2++;
        } else if (p2 >= n) {
            outputArr[i] = nums1[p1];
            p1++;
        } else {
            if (nums1[p1] <= nums2[p2]) {
                outputArr[i] = nums1[p1];
                p1++;
            } else {
                outputArr[i] = nums2[p2];
                p2++;
            }
        }
    }
    
    
    for(let num in outputArr) {
        nums1[num] = outputArr[num];
    }
};