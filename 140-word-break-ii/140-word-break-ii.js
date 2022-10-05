/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const results = [];
    
    const backtrack = (str, comb = []) => {
        if(str === '') {
            results.push(comb.join(" "));
            return;
        }
        
        for(let i = 0; i < wordDict.length; i++) {
            if(str.slice(0, wordDict[i].length) === wordDict[i]) {
                backtrack(str.slice(wordDict[i].length), [...comb, wordDict[i]]);
            }
        }
    }   
    
    backtrack(s)
    
    return results;
};