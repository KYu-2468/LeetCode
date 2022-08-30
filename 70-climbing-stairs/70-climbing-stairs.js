/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const waysToClimb = [0, 1, 2];
    
    for(let i = 3; i <= n; i++) {
        waysToClimb.push(waysToClimb[i - 1] + waysToClimb[i - 2]);
    }
    
    return waysToClimb[n];
};