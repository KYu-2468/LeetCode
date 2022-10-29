/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const freq = new Array(3).fill(0);
    
    for(let num of nums) {
        freq[num]++;
    }
    
    let i = 0;
    for(let j = 0 ; j < freq.length; j++) {
        while(freq[j]) {
            nums[i] = j;
            i++;
            freq[j]--;
        }
    }
    
    return nums;
};