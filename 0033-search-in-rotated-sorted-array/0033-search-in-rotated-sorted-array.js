/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(mid, left, right)
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > nums[left] && target < nums[mid] && target >= nums[left]) {
            right = mid - 1;
        } else if (nums[mid] < nums[left] && (target >= nums[left] || target < nums[mid])) {
            right = mid - 1;
        } else {
            console.log('go right')
            left = mid + 1;
        }
    }
    
    return -1;
};