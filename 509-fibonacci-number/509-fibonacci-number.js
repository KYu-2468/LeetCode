/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let prev1 = 1;
    let prev2 = 0;
    
    if(n <= 1) return n;
    
    for(let i = 2; i <= n; i++) {
        [prev1, prev2] = [prev1 + prev2, prev1];
    }
    
    return prev1;
};