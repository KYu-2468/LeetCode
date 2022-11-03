/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy = prices[0];
    let sell = 0;
    
    for(let price of prices) {
        if(price < buy) {
            buy = price;
            sell = 0;
        } else if(price > buy && price > sell) {
            sell = price;
            max = Math.max(max, sell - buy);
        }
    }
    
    
    return max;
};