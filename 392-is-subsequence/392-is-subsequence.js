/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const sub = s.split("");
    
    for(let i = t.length - 1; i >= 0; i--) {
        if(t.charAt(i) === sub[sub.length - 1]) {
            sub.pop();
        }
    }
    
    return sub.length? false : true;
};