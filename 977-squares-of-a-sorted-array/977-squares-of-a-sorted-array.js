/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const sortedNums = new Array(nums.length);
    
    for(let i = nums.length - 1; i >= 0; i--) {
        
        if(Math.abs(nums[right]) > Math.abs(nums[left])) {
            sortedNums[i] = nums[right];
            right--;
        } else {
            sortedNums[i] = nums[left];
            left++;
        }
    }
    
    return sortedNums.map(num => num ** 2);
};