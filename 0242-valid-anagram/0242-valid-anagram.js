/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    const sFreq = {};
    
    for(let i = 0; i < s.length; i++) {
        if(!sFreq[s[i]]) {
            sFreq[s[i]] = 0;
        }
        sFreq[s[i]]++;
    }
    
    for(let i = 0; i < t.length; i++) {
        if(!sFreq[t[i]]) {
            return false;
        }
        
        sFreq[t[i]]--;
    }
    
    return true;
};