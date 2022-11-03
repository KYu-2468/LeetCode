/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sMap = {};
    const pMap = {};
    s = s.split(" ");
    
    if(pattern.length !== s.length) return false;
    
    for(let i = 0; i < s.length; i++) {
        if(!pMap[pattern[i]] && !sMap[s[i]]) {
            pMap[pattern[i]] = s[i];
            sMap[s[i]] = pattern[i];
        } else if(pMap[pattern[i]] !== s[i] || sMap[s[i]] !== pattern[i]) {
            return false;
        }
    }
    
    return true;
};