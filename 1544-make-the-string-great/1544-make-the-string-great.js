/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let prev;
    
    for(let i = 1; i < s.length; i++) {
        prev = s[i - 1];
        if(prev && s[i].toLowerCase() === prev.toLowerCase() && s[i] !== prev) {
            s = s.slice(0, i - 1) + s.slice(i + 1);
            i -= 2;
        }
    }
    
    return s;
};