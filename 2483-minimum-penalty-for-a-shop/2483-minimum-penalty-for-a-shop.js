/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let minPenalty= 0;
    let earliest = customers.length;
    
    for (const str of customers) if (str === "N") minPenalty++;
    
    let curPenalty = minPenalty;
    for (let i = customers.length - 1; i >= 0; i--) {
        if (customers[i] === "Y") {
            curPenalty++;
        } else {
            curPenalty--;
        }
        
        if (curPenalty <= minPenalty) {
            minPenalty = curPenalty;
            earliest = i;
        }
    }
    
    return earliest;
};