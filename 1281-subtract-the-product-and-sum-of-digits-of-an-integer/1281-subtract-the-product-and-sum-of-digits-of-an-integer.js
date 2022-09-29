/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digits = [];
    
    while(n) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    
    const product = digits.reduce((total, cur) => total *= cur, 1);
    const sum = digits.reduce((total, cur) => total += cur, 0);
    
    return product - sum;
};