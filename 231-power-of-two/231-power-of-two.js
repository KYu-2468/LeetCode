/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if(n <= 0) {
        return false;
    }
    
    return (n & (n - 1)) === 0;
    
//     let i = 0;
//     let total = 1;
//     while(total <= n) {
//         total = 2 ** i;
//         if(total === n) {
//             return true;
//         }
        
//         i++;
//     }
//     return false;
};