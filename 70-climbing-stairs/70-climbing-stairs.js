/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev1 = 2;
    let prev2 = 1;
    
    for(let i = 3; i <= n; i++) {
        [prev1, prev2] = [prev1 + prev2,prev1];
    }
    
    return n === 1? 1 : prev1;
};