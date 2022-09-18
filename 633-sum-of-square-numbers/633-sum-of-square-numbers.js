/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0;
    let right = Math.ceil(c ** 0.5);
    while(left <= right) {
        const total = (right ** 2) + (left ** 2);
        
        if(total === c) {
            return true;
        } else if(total > c) {
            right--;
        } else {
            left++;
        }
    }
    
    return false;
};