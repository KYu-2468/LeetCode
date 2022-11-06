/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    
    if(k > 1) {
        return s.split("").sort().join("");
    }
    
    let smallest = s;
    
    for(let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        if(s < smallest) {
            smallest = s;
        }
    }
    
    return smallest;
};
