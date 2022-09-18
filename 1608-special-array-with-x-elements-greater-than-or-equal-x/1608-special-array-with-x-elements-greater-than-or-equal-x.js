/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => a - b);
    
    if(nums.length <= nums[0]) {
        return nums.length;
    }
    
    let left = 0;
    let right = nums.length;
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        const numOfLarger = nums.length - mid;
        if((numOfLarger === nums[mid] && numOfLarger > nums[mid - 1]) || (numOfLarger > nums[mid - 1] && numOfLarger < nums[mid])) {
            return numOfLarger;
        } else if(numOfLarger > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
};