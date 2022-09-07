/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const minCost = [0,0];
    
    for(let i = 2; i < cost.length; i++) {
        const prev1 = minCost[i - 1] + cost[i - 1];
        const prev2 = minCost[i - 2] + cost[i - 2];
        minCost.push(Math.min(prev1, prev2))
    }
    
    const prev1 = minCost[cost.length - 1] + cost[cost.length - 1];
    const prev2 = minCost[cost.length - 2] + cost[cost.length - 2];
    
    return Math.min(prev1, prev2);
};