/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0;
    
    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    
    return profit;
    
    
//     const arr = new Array(prices.length).fill(0);
    
//     for(let i = prices.length - 2; i >= 0; i--) {
//         for(let j = i + 1; j < prices.length; j++) {
//             if(prices[i] < prices[j]) {
//                 let m = 0;
//                 for(let n = j + 1; n < prices.length; n++) {
//                     m = Math.max(m, arr[n]);
//                 }
                
//                 arr[i] = Math.max(arr[i], prices[j] - prices[i] + m);
//             }
//         }
        
//     }
    
//     return Math.max(...arr);
};