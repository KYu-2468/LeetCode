/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = {};
    
    for (const char of s) {
        freq[char] = freq[char] || 0;
        freq[char]++;
    }
    
    const arr = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    let res = "";
    
    for (const [char, count] of arr) {
        res += char.repeat(count);
    }
    
    return res;
};