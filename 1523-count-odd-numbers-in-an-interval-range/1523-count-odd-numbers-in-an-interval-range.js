/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if(low % 2 === 0) {
        return Math.ceil((high - low) / 2);
    } else {
        return 1 + Math.ceil((high - (low + 1)) / 2);
    }
};