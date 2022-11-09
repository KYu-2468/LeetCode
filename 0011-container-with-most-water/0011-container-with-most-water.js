/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while(left < right) {
        const curArea = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(max, curArea);
        
        if(height[left] < height[right]) {
            left++;
        } else {
            right--
        }
        
    }
    
    return max;
};