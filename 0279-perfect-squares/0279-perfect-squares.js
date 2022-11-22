/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(
        dp[i],
        dp[i - j * j] + 1,
      );
    }
  }
  return dp[n];
//     const memo = [0, 1, 2, 3, 1];
    
//     const dfs = (num) => {
//         if (memo[num] !== undefined) return memo[num];
//         let min = Infinity;
//         for (let i = Math.floor(num ** 0.5); i >= 1; i--) {
//             min = Math.min(min, 1 + dfs(num - (i ** 2)));
//         }
//         memo[num] = min;
//         return min;
//     }
    
//     return dfs(n);
};