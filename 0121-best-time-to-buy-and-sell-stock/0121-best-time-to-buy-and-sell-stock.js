/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let sell = prices.length - 1;
    
    for(let i = sell; i >= 0; i--) {
        if(prices[i] < prices[sell]) {
            max = Math.max(max, prices[sell] - prices[i]);
        } else {
            sell = i;
        }
    }
    
    return max;
};