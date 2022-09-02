/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPro = 0;
    let buy = 0;
    
    
    for(let sell = 1; sell < prices.length; sell++) {
        
        if(prices[sell] > prices[buy]) {
            maxPro = Math.max(maxPro, prices[sell] - prices[buy]);
        } else {
            buy = sell;
        }
    }
    
    
    return maxPro;
};