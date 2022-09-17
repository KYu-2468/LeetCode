/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    
    if(x <= 1) return x;
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        
        if ((mid - 1) * (mid - 1) <= x && mid * mid > x) {
            return mid - 1;
        } else if (mid * mid > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};