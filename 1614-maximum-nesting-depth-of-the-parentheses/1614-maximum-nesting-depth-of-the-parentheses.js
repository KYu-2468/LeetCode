/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0;
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            count++;
            max = Math.max(max, count);
        }
        
        if(s[i] === ")") {
            count--;
        }
    }
    
    return max;
};