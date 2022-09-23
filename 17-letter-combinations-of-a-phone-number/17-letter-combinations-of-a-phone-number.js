/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = [];
    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    
    if(digits.length === 0) return result;
    
    const backTracking = (index, str) => {
        if(str.length === digits.length) {
            result.push(str);
            return;
        }
        
        for(let i = 0; i < map[digits[index]].length; i++) {
            backTracking(index + 1, str + map[digits[index]][i]);
        }
    }
    
    backTracking(0, "");
    return result;
};