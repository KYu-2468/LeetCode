/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = {0:0};
    
    for(let i = 0; i < coins.length; i++) {
        memo[coins[i]] = 1;
    }
    
    const backtrack = (target) => {
        // console.log(target, memo)
        if(target < 0) return Number.MAX_VALUE;
        if(memo[target] >= 0) return memo[target];
        
        let min = Number.MAX_VALUE;
        for(let i = 0; i < coins.length; i++) {
            min = Math.min(min, 1 + backtrack(target - coins[i]));
        }
        memo[target] = min;
        return memo[target];
    }
    
    backtrack(amount);
    
    return memo[amount] >= Number.MAX_VALUE ? -1 : memo[amount];
};