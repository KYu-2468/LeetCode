/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) {
        return 1;
    }
    
    const arr = [0, 1, 2];
    let prev1 = 1;
    let prev2 = 2;
    
    for(let i = 3; i <= n; i++) {
        const p3 = prev1 + prev2;
        
        if(prev1 > prev2) {
            prev2 = p3;
        } else {
            prev1 = p3;
        }
    }
    
    return Math.max(prev1, prev2);
};