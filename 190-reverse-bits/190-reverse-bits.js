/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let sum = 0;
    
    for(let i = 0; i < 32; i++) {
        if(n & 1 === 1) {
            sum += 2 ** (31 - i);
        }
        n = n >>> 1;
    }
    
    return sum;
};
