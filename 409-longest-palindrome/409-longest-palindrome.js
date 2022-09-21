/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const freqMap = {};
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        freqMap[s[i]] = freqMap[s[i]] + 1 || 1;
        if(freqMap[s[i]] === 2) {
            count += 2;
            freqMap[s[i]] = 0;
        }
    }
    
    for(let c in freqMap) {
        if(freqMap[c] === 1) {
            return count + 1;
        }
    }
    
    return count;
};