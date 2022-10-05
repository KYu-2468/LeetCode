/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Array(s.length + 1).fill(null);
    memo[memo.length - 1] = true;
    
    const dp = (index) => {
        if(memo[index] !== null) return memo[index];
        
        for(let i = 0; i < wordDict.length; i++) {
            const possible = s.slice(index, index + wordDict[i].length) === wordDict[i] && dp(index + wordDict[i].length);
            if(possible) {
                memo[index] = true;
                return true;
            }
        }
        memo[index] = false;
        return false;
    }
    
    return dp(0);
};