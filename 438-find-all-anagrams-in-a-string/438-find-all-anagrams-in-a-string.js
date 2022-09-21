/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(p.length > s.length) return [];
    
    const output = [];
    const pMap = {};
    
    for(let i = 0; i < p.length; i++) {
        pMap[p[i]] = pMap[p[i]] + 1 || 1;
    }
    
    const isValid = (obj) => {
        for(let c in pMap) {
            if(pMap[c] !== obj[c]) {
                return false;
            }
        }
        
        return true;
    }
    
    const window = {};
    
    for(let i = 0; i < p.length; i++) {
        window[s[i]] = window[s[i]] + 1 || 1;
    }
    
    if(isValid(window)) output.push(0);
    
    for(let i = 1; i <= s.length - p.length; i++) {
        window[s[i - 1]]--;
        window[s[i + p.length - 1]] = window[s[i + p.length - 1]] + 1 || 1;
        
        if(isValid(window)) output.push(i);
    }
    
    return output;
};