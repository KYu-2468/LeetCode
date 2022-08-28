/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let i = 0;
    let total = 1;
    while(total <= n) {
        total = 2 ** i;
        if(total === n) {
            return true;
        }
        
        i++;
    }
    return false;
};