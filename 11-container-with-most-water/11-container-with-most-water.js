/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    
    while(left < right) {
        const amount = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(max, amount);
        
        if(height[right] > height[left]) {
            left++;
        } else if(height[left] > height[right]) {
            right--;
        } else {
            right--;
            left++;
        }
    }
    
    return max;
};