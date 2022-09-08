/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s, start = 0, results = [], comb = []) {
    if(comb.length === s.length) {
        results.push(comb.join(""));
        return;
    }
    
        
    if(!Number.isInteger(+s.charAt(start))) {
        letterCasePermutation(s, start + 1, results, [...comb, s.charAt(start).toUpperCase()]);
        letterCasePermutation(s, start + 1, results, [...comb, s.charAt(start).toLowerCase()]);
    } else {
        comb.push(s.charAt(start));
        letterCasePermutation(s, start + 1, results, comb);
    }
    
    return results;
};