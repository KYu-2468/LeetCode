/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};
    
    for(let c of s) {
        if(!map[c]) {
            map[c] = 0;
        }
        
        map[c]++;
    }
    
    for(let key of Object.keys(map)) {
        if(map[key] === 1) {
            return s.indexOf(key);
        }
    }
    
    return -1;
};