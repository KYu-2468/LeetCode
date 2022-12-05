/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let l = 0; // left pointer
    const set = new Set();
    
    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    
    return max;
};