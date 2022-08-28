/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const results = [];
    const strArr = s.split("");
    
    const backtracking = (strArr = [], combo = []) => {
                
        if(strArr.length === 1 && Number.isNaN(+strArr[0])) {
            
            results.push([...combo, strArr[0].toUpperCase()].join(""));
            results.push([...combo, strArr[0].toLowerCase()].join(""));
            
            return;
        }
        
        if(strArr.length === 1) {
            results.push([...combo, strArr[0]].join(""));
            return;
        }
        
        if(Number.isInteger(+strArr[0])) {
            backtracking(strArr.slice(1), [...combo, strArr[0]]);
            return;
        }
        
        backtracking(strArr.slice(1), [...combo, strArr[0].toUpperCase()]);
        backtracking(strArr.slice(1), [...combo, strArr[0].toLowerCase()]);
        
    }
    
    backtracking(strArr);
    
    return results;
};