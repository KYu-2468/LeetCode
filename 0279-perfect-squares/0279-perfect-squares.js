/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const memo = [0, 1, 2, 3, 1];
    
    const dfs = (num) => {
        if (memo[num] !== undefined) return memo[num];
        let min = Infinity;
        for (let i = Math.floor(num ** 0.5); i >= 1; i--) {
            min = Math.min(min, 1 + dfs(num - (i ** 2)));
        }
        memo[num] = min;
        return min;
    }
    
    return dfs(n);
};