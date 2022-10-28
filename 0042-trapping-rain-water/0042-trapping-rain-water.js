/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const leftMax = new Array(height.length).fill(0);
    const rightMax = new Array(height.length).fill(0);
    let sum = 0;
    
    for(let i = 1; i < leftMax.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
    }
    
    for(let i = rightMax.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
    }
    
    for(let i = 1; i < height.length - 1; i++) {
        sum += Math.max(0, Math.min(leftMax[i], rightMax[i]) - height[i]);
    }
    
    return sum;
};