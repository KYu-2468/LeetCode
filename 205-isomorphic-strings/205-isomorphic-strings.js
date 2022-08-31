/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if(s.length !== t.length) {
        return false;
    }
    
    s = s.split("");
    t = t.split("");
    
    const sMap = {};
    const tMap = {};
    
    for(let i = 0; i < s.length; i++) {
        
        if(sMap[s[i]]) {
            s[i] = sMap[s[i]];
        } else if(tMap[t[i]]) {
            return false;
        } else {
            tMap[t[i]] = true;
            sMap[s[i]] = t[i];
            s[i] = t[i];
        }
        
    }
    
    return s.join("") === t.join("");
};