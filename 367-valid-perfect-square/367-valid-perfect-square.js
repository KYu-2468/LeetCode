/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = 2 ** 16;
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        const sqr = mid ** 2;
        
        if(sqr === num) {
            return true;
        } else if(sqr > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return false;
};